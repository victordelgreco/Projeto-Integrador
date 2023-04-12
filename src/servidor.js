const express = require('express');
const api = express();
const {requererTodosProdutos} = require('./controllers/produtos.controllers')
const path = require('path');
const DbPanteCactus = require('./database/database')
// Cria tabela artigos, caso ela não exista...
const ProdutosEntity = require('./database/tables/Produtos.Entity')
// Definir uma nova tabela...
// Criar recursos de consulta para essa tabela...


try{
    // Tenta autenticar...
    DbPanteCactus.authenticate();
    // Se autenticação acontecer, sincroniza com banco...
    DbPanteCactus.sync();
}
catch(error) {
    // Caso aconteça algum erro, retorna o erro para usuário...
    console.error(error);
}



api.set('views', path.join(__dirname, 'views'))
api.set('view engine', 'ejs')

api.get('/produtos', requererTodosProdutos)


api.listen('12345', ()=>{
    console.log('Servidor Funcionou');
});