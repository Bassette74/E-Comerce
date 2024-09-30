// ./services/userService.js
const auth = require('../auth');
const bcrypt = require('bcrypt');
var round_salts = 10;
const db = require('../models');

// ./services/productService.js
const Product = require('../models/produto');

class ProductService {
    async create(Nome_Produto, Descricao_Produto, preco_Produto, estoque_Produto) {
        try {
            const newProduct = await Product.create({ Nome_Produto, Descricao_Produto, preco_Produto, estoque_Produto });
            return newProduct;
        } catch (error) {
            throw error;
        }
    }

    async findAll() {
        try {
            return await Product.findAll();
        } catch (error) {
            throw error;
        }
    }

    async update(id, data) {
        try {
            const product = await Product.findByPk(id);
            if (!product) throw new Error('Produto não encontrado');
            await product.update(data);
            return product;
        } catch (error) {
            throw error;
        }
    }

    async delete(id) {
        try {
            const result = await Product.destroy({ where: { id } });
            return result > 0;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProductService();
