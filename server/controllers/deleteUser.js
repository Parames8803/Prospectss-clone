// importing the requirements such as 
// models and helper functions
const { Op } = require("sequelize");
const { User } = require('../models');
const { Role } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/hash');

const deleteUserDetails = {
    async deleteUser(req, res) {
        try {
            const accessRoles = ['admin', 'user'];
            const user = req.user;
            const userRoleId = user.role
            const userId = user.id

            let findRole = await Role.findAll({ where: { id: userRoleId } })
            let role = findRole[0].role

            if (accessRoles.includes(role)) {

                // delete the user by updating the status as 0 with the userId
                let setStatus = await User.update({ u_status: 0 }, { where: { id: userId } })
                let deleteUser = await User.destroy({ where: { id: userId } })
                res.send({ message: ' Deleted your Account..' })
            } else {
                res.status(401).json({ message: 'Unauthorized User...' })
            }

        } catch (error) {
            console.log(error)
        }
    },
    async deleteUserById(req, res) {
        try {
            const accessRoles = ['admin'];
            const user = req.user;
            const userRoleId = user.role

            let findRole = await Role.findAll({ where: { id: userRoleId } })
            let role = findRole[0].role

            if (accessRoles.includes(role)) {
                let userId = req.params.id

                // delete the user with id from the frontend and also update the status 
                let setStatus = await User.update({ u_status: 0 }, { where: { id: userId } })
                let deleteUser = await User.destroy({ where: { id: userId } })
                res.send({ message: ' Deleted the User..' })
            } else {
                res.status(401).json({ message: 'Unauthorized User...' })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = deleteUserDetails;