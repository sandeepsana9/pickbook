const authenticationDao = require('../dao/authentication.dao')
const { STATUS } = require('../constants');
const signUp = async (request, response) => {
    try {
        let create = await authenticationDao.create(request.body);
        if (create) {
            return response.status(STATUS.OK).send({message: 'account created successfully!'});
        }

    } catch (error) {
        console.log("🚀 ~ signUp ~ error:", error)
        return response.status(STATUS.ERROR).send({message: error});
    }
};

module.exports = {
    signUp,
}