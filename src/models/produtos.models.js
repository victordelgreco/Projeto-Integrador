const DbPanteCactus = require('../database/database')

const carrinho = [
    {
        id:1,
        nome:"Pendente Luna",
        categoria:"Pendente",
        quantidade:10,
        valor:355
    },
    {
        id:2,
        nome:"Arandela Luna",
        categoria:"Arandela",
        quantidade:15,
        valor:26
    },
    {
        id:3,
        nome:"Lustre Luna",
        categoria:"Lustre",
        quantidade:21,
        valor:10

    }
]


function ListarProdutos () {


    return carrinho

  
};


module.exports = {ListarProdutos};
