// importing the requirements such as 
// models and helper functions
const { User } = require('../models');
const { Role } = require('../models');
const { Op } = require("sequelize");
const { generateOTP } = require('../helpers/generateOTP');
const verifyEmail = require('../helpers/mailer');
const { hashPassword } = require('../helpers/hash')

// definning the authController with required
// functions such as register and login.
const forgotController = {

    async verifyEmail(req, res) {
        try {
            // Get the email from the user and verify if the email
            // is already exists or not
            const email = req.body.userEmail;
            const checkEmail = await User.findAll({
                where: {
                    [Op.and]: [
                        { u_user_email: email },
                        { u_status: { [Op.eq]: 1 } }
                    ]
                }
            });
            if (checkEmail.length > 0) {
                // if email is exists 
                const userEmail = checkEmail[0].u_user_email;
                const userName = checkEmail[0].u_user_name;
                //generate otp and set the expiration time to 10 minutes
                const otp = generateOTP();
                const otpExpiresAt = new Date();
                otpExpiresAt.setTime(otpExpiresAt.getTime() + 600000);
                // send the mail with otp to the user
                const emailSend = await verifyEmail(userEmail, userName, otp);
                if (emailSend) {
                    // update it to the user's db.
                    await User.update({ otp: otp, otpExpiresAt: otpExpiresAt }, {
                        where: { u_user_name: userName }
                    })
                    res.send({ message: "Email sent successfully" })
                }
            } else {
                res.send(" Email is not registered yet");
            }
        } catch (error) {
            console.log(error)
        }
    },

    async verifyOtp(req, res) {
        try {

            // Get the email from the client storage
            // and also the otp from user
            const email = req.body.userEmail;
            const mailOtp = req.body.otp;
            console.log(req.body)
            // Check the otp with user DB 
            const checkOtp = await User.findAll({
                where: {
                    [Op.and]: [
                        { u_user_email: email },
                        { u_status: 1 }
                    ]
                }
            })
            // console.log(parseInt(checkOtp[0].otp))
            // console.log(mailOtp)
            // Check if the otp is expires or not
            if (mailOtp !== parseInt(checkOtp[0].otp) || Date.now() > checkOtp[0].otpExpiresAt) {
                return res.status(400).json({ error: 'Invalid OTP' });
            } else {
                // if otp matches remove the stored otp from DB
                await User.update({ otp: null, otpExpiresAt: null }, {
                    where: { u_user_email: email }
                });
                res.json({ message: 'OTP verified successfully' });
            }
        } catch (error) {
            console.log(error)
        }
    },

    async resetPassword(req, res) {

        try {
            const email = req.body.email;
            const newPassword = req.body.newPassword;
            const cnfPassword = req.body.cnfPassword;
            // Allow only both password fields are same
            if (newPassword === cnfPassword) {
                // Get the user using email and update the password after hashed it
                let user = await User.findAll({
                    where: {
                        [Op.and]: [
                            { u_user_email: email },
                            { u_status: 1 }
                        ]
                    }
                })
                // check the user exists or not 
                if (!user) {
                    res.send({ message: "invalid User" })
                }
                // Hashing the password
                let hashedPassword = await hashPassword(newPassword);
                await User.update({ u_user_pass: hashedPassword }, { where: { u_user_email: email } })
                res.send({ message: ' Password reset successfully. ' })

            } else {
                res.send({ message: "Password does not match..." })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = forgotController;