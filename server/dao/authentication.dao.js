const UserModel = require('../models/signup.model')


module.exports.create = async (body) => {
    return await UserModel.create(body);
}