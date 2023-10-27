// importing the requirements such as 
// models and helper functions
const { Op } = require("sequelize");
const { User } = require('../models');
const { Role } = require('../models');

const getUserDetails = {
    async getUser(req, res) {
        try {
            const accessRoles = ['admin', 'user', 'guest'];
            const user = req.user;
            const userRoleId = user.role
            let findRole = await Role.findAll({ where: { id: userRoleId } })
            let role = findRole[0].role
            if (accessRoles.includes(role)) {
                // get all the users by checking the status which the deleted 
                // user has the status 0. so fetch only the active users.
                const allUsers = await User.findAll({ where: { u_status: { [Op.eq]: 1 } } });
                res.send('All users are ...' + JSON.stringify(allUsers))
            } else {
                res.status(401).json({ message: 'Unauthorized User...' })
            }
        } catch (error) {
            console.log(error)
        }
    },

    async getUserById(req, res) {
        try {
            const accessRoles = ['admin', 'user'];
            const user = req.user;
            const userRoleId = user.role
            let findRole = await Role.findAll({ where: { id: userRoleId } })
            let role = findRole[0].role
            if (accessRoles.includes(role)) {
                let userId = req.params.id;
                // get user with the id from the frontend 
                // then fetch the user detail only the userId and status active should matches
                const getUser = await User.findAll({
                    where: {
                        [Op.and]: [
                            { id: userId },
                            { u_status: 1 }
                        ]
                    }
                })
                if (getUser.length > 0) {
                    res.send({ message: 'Your fetched user is ' + JSON.stringify(getUser) })
                } else { res.send({ message: 'There is no such User..' }) }
            } else {
                res.status(401).json({ message: 'Unauthorized User...' })
            }
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = getUserDetails;