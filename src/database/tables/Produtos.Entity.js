const { DataTypes } = require('sequelize')

const DbPanteCactus = require('../database')

// definimos a tabela...
DbPanteCactus.define('produtos', {
    titulo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    imagem: DataTypes.STRING,
    preco_de: DataTypes.STRING,
    preco_por: DataTypes.STRING
})