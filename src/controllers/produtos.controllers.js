const { ListarProdutos } = require("../models/produtos.models");

const requererTodosProdutos = (req, res) => {
  const carrinho = ListarProdutos();

  res.render("produtos", {
    carrinho,
  });
};

module.exports = { requererTodosProdutos };
