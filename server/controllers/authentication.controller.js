const ObjectId = require('mongoose').Types;
const authenticationDao = require('../dao/authentication.dao')
const { STATUS } = require('../constants');
const signUp = async (request, response) => {
    try {
        const emailExist = await authenticationDao.exists({ email: request.body.email });
        if (emailExist) {
            return response.status(STATUS.ERROR).send({ message: 'email already exist!' });
        }
        const create = await authenticationDao.create(request.body);
        if (create) {
            return response.status(STATUS.OK).send({ message: 'account created successfully!' });
        }

    } catch (error) {
        console.log(error)
        return response.status(STATUS.ERROR).send({ message: error });
    }
};

const login = async (request, response) => {
    try {
        const login = await authenticationDao.exists({ email: request.body.email, password: request.body.password })
        if (login) {
            return response.status(STATUS.OK).send({ userId: login._id, message: 'login successfully' });
        }
    } catch (error) {
        return response.status(STATUS.ERROR).send({ message: error });
    }
};

const getUserDetails = async (request, response) => {
    try {
        const userDetails = await authenticationDao.findOne({_id: new ObjectId(request.query.userId)});
    } catch (error) {
        return response.status(STATUS.ERROR).send({ message: error });
    }
}

module.exports = {
    signUp,
    login,
    getUserDetails,
}