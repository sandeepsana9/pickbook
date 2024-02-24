const authenticationDao = require('../dao/authentication.dao')
const { STATUS } = require('../constants');
const signUp = async (request, response) => {
    try {
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
        const login = await authenticationDao.exists({email: request.body.email, password: request.body.password})
        if(login){
            return response.status(STATUS.OK).send({ message: 'login successfully'});
        }
    } catch (error) {
        return response.status(STATUS.ERROR).send({ message: error });
    }
}

module.exports = {
    signUp,
    login,
}