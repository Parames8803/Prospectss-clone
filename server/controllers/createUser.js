// importing the requirements such as 
// models and helper functions
const { Op } = require("sequelize");
const { User } = require('../models');
const { Role } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/hash');

const createUser = async (req, res) => {
    // trycatch block for handling the errors
    try {
        // declare the access roles for the function in array 
        const accessRoles = ['admin', 'user'];
        // get the user and userRoleId from the request
        const user = req.user;
        const userRoleId = user.role
        // from the role id find the role
        let findRole = await Role.findAll({ where: { id: userRoleId } })
        let role = findRole[0].role
        // check if the user role includes the access role for that function
        // if has access then give access to create the user
        if (accessRoles.includes(role)) {
            // if has access then get the user details from the frontend
            const { username, email, password, role } = req.body;
            // then check the username already exists are not
            let checkUser = await User.findAll({
                where: {
                    [Op.and]: [
                        { u_user_name: username },
                        { u_status: 1 }
                    ]
                }
            })
            // if only not exists then allow the user to create the user
            if (checkUser.length > 0) {
                res.send({ message: 'USername already exists...' })
            } else {
                // get the role id from role 
                let findRoleId = await Role.findAll({ where: { role: role } })
                let roleId = findRoleId[0].id
                // generate the hashed password and create the new user
                const hashedPassword = await hashPassword(password);
                let newUser = await User.create({ u_user_name: username, u_user_email: email, u_user_pass: hashedPassword, roleId: roleId });
                res.send('User Created..' + newUser.u_user_name)
            }
        } else {
            // else the user didn't has access then send the unauthorized message
            res.status(401).json({ message: 'Unauthorized User...' })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = createUser;