const { Sequelize } = require("sequelize");

const config = ("../../config")

const db = new Sequelize(config.db.development)

module.exports = db