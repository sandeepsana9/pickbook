const { ObjectId } = require('mongoose').Types;
const userDao = require('../dao/user.dao');
const { STATUS } = require('../constants');

const getUserDetails = async (request, response) => {
    try {
        const userDetails = await userDao.findOne({ _id: new ObjectId(request.params.userId) }, { firstName: 1, lastName: 1 });
        if (userDetails) {
            return response.status(STATUS.OK).send({ userDetails })
        }
    } catch (error) {
        return response.status(STATUS.ERROR).send({ message: error });
    }
}

module.exports = {
    getUserDetails,
}