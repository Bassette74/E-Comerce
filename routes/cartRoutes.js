const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController.js');

// Rota para adicionar produto à cesta
router.post('/cart/add', cartController.addProduct);

// Rota para remover produto da cesta
router.delete('/cart/remove/:id', cartController.removeProduct);

// Rota para visualizar a cesta
router.get('/cart', cartController.viewCart);

module.exports = router;
