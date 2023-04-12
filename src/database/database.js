require('dotenv').config()

const { Sequelize } = require('sequelize')

const DbPanteCactus = new Sequelize(
    //NOME DO BANCO
    // process.env.DB_NOME,
    'dbpantecactus',
    // USUARIO
    // process.env.DB_USUARIO,
    'root',
    // SENHA
    '',
    // process.env.DB_SENHA,
    // Tecnologia / Aonde está o localizado

{
        // host: process.env.DB_HOST,
        host: 'localhost',
        dialect: 'mysql'
    }
)

module.exports = DbPanteCactus