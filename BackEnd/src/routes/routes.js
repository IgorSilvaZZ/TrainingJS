const express = require('express');
const routes = express.Router();

const ProdutoController = require('../controllers/ProdutoController');

routes.get("/produtos", ProdutoController.index);
routes.post("/produtos", ProdutoController.createProduto);
routes.get("/produto/:id", ProdutoController.oneProduto);
routes.put("/produto/:id", ProdutoController.updateProduto);
routes.delete("/produto/:id", ProdutoController.deleteProduto);

module.exports = routes;