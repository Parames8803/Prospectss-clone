
const { User } = require('../models')

const restoreId = async (req, res) => {
    try {
        const userId = req.params.id;
        let checkUser = await User.findAll({ where: { id: userId } })
        if (checkUser[0].u_status == 0) {
            // perform restore operation
            await User.update({ u_status: 1 }, { where: { id: userId } })
            res.semd({ message: "Account has been restored.." })
        } else {
            res.send({ message: "This Account is active now..." })
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = restoreId;