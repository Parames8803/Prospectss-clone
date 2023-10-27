// importing the requirements such as 
// models and helper functions
const { Op } = require("sequelize");
const { User } = require('../models');
const { Role } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/hash');

// definning the userController with required
// functions such as createUser, getUSer , etc...
const updateController = {
    async updateUserName(req, res) {
        try {
            const accessRoles = ['admin', 'user'];
            const user = req.user;
            const userRoleId = user.role
            const userId = user.id
            let findRole = await Role.findAll({ where: { id: userRoleId } })
            const role = findRole[0].role
            let findUser = await User.findAll({
                where: {
                    [Op.and]: [
                        { id: userId },
                        { u_status: 1 }
                    ]
                }
            })
            const userName = findUser[0].u_user_name
            if (accessRoles.includes(role)) {
                // get the old and new username of the user
                let newUsername = req.body.newUsername
                let oldUsername = req.body.oldUsername
                // if the username matches the update the username accordingly
                if (oldUsername === userName) {
                    const updateName = await User.update({ u_user_name: newUsername }, { where: { id: userId } })
                    res.send({ message: ' Username updated successfully. ' })
                } else { res.send({ message: 'Please enter the correct username' }) }
            } else {
                res.status(401).json({ message: 'Unauthorized User...' })
            }
        } catch (error) {
            console.log(error)
        }
    },

    async updatePassword(req, res) {
        try {
            const accessRoles = ['admin', 'user'];
            const user = req.user;
            const userRoleId = user.role
            const userId = user.id
            let findRole = await Role.findAll({ where: { id: userRoleId } })
            const role = findRole[0].role
            let findUser = await User.findAll({
                where: {
                    [Op.and]: [
                        { id: userId },
                        { u_status: 1 }
                    ]
                }
            })
            const userPass = findUser[0].u_user_pass
            if (accessRoles.includes(role)) {
                // get the old and new password from the frontend
                const newPassword = req.body.newPassword
                const oldPassword = req.body.oldPassword
                // compare the old password by fetching using
                // userId and with the userpass from db.
                const isPassMatch = await comparePassword(oldPassword, userPass)
                if (isPassMatch) {
                    // if pass match then hash the password and update the user
                    let hashedPassword = await hashPassword(newPassword);
                    const updatePass = await User.update({ u_user_pass: hashedPassword }, { where: { id: userId } })
                    res.send({ message: ' Password updated successfully. ' })
                } else { res.send({ message: 'Password does not match..' }) }
            } else {
                res.status(401).json({ message: 'Unauthorized User...' })
            }
        } catch (error) {
            console.log(error)
        }
    },

    async updateRole(req, res) {
        try {
            // definning the access roles for the function
            const accessRoles = ['admin'];
            const user = req.user;
            const userRoleId = user.role
            // fetching the role using user roleId
            let findRole = await Role.findAll({ where: { id: userRoleId } })
            const role = findRole[0].role
            if (accessRoles.includes(role)) {
                // if the user has access to the function then get the
                // role and id from the frontend
                let newRole = req.body.newRole;
                let userId = req.body.userId;
                // get the role id using given role
                const findRoleId = await Role.findAll({ where: { role: newRole } })
                let roleId = findRoleId[0].id
                // update the user role according to the userId 
                const updateRole = await User.update({ roleId: roleId }, { where: { id: userId } })
                res.send({ message: ' Role updated Successfully.. ' })
            } else { res.status(401).json({ message: ' Unauthorized User.. ' }) }
        } catch (error) {
            console.log(error)
        }
    },
}



module.exports = updateController;