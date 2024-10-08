const cartService = require('../services/cartService');

class CartController {
    // Adiciona um produto à cesta
    async addProduct(req, res) {
        const { userId, productId, quantity } = req.body;
        try {
            const cart = await cartService.addProduct(userId, productId, quantity);
            res.status(201).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Remove um produto da cesta
    async removeProduct(req, res) {
        const { id } = req.params; // ID do item na cesta
        const { userId } = req.body;
        try {
            const result = await cartService.removeProduct(userId, id);
            if (result) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Produto não encontrado na cesta' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Visualiza os itens na cesta
    async viewCart(req, res) {
        const { userId } = req.body;
        try {
            const cart = await cartService.viewCart(userId);
            res.status(200).json(cart);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new CartController();
