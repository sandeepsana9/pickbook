const UserModel = require('../models/user.model')


const create = async (body) => {
    return await UserModel.create(body);
}

const findOne = async (query, project={}, options={}) => {
    return await UserModel.findOne(query, project, options)
}

const exists = async (query) => {
    return await UserModel.exists(query);
}

module.exports = {
    create,
    findOne,
    exists,
}