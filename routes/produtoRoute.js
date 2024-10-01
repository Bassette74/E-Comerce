// ./routes/productRoutes.js
var express = require('express');
var router = express.Router();
const auth = require('../auth'); //Carregar os objetos do auth.js

//Implementar as dependencias para o funcionamento da classe User
const db =require('../models') // carregando o banco de dados

//Carregando as classes service e controller da user
const ProdutoService = require('../services/produtoService');
const produtoController = require('../controllers/produtoController');

//Construir os objetos a partir das classes
const produtoService = new ProdutoService(db.Produto);
const produtoController = new PordutoController(produtoService);

// Rotas protegidas
router.post('/novoproduto', auth.verifyToken, async(req,res)=>{
    produtoController.create(req,res);
}),

router.get('/listproduto', auth.verifyToken, async(req,res)=>{
    produtoController.findAll(req,res);
}),

router.get('/updateproduto', auth.verifyToken, async(req,res)=>{
    produtoController.update(req,res);
}),

router.get('/deleteproduto', auth.verifyToken, async(req,res)=>{
    produtoController.delete(req,res);
}),


module.exports = router;
