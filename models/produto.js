// model / produto.js

const Sequelize = require('sequelize');
module.exports = (sequelize) =>{
    const Produto = sequelize.define('Produto',{
        id:{
            type: Sequelize.INTEGER,
            autoIncrement: true,
        },
        Nome_Produto:{
            type: Sequelize.STRING,
            unique: true,
            allowNull:false
        },
        Descricao_Produto:{
            type: Sequelize.DATE,
            allowNull: true
        },
        preco_Produto:{
            type: Sequelize.DECIMAL,
            allowNull:false
        },
        estoque_Produto:{
            type: Sequelize.INT,
            allowNull:false
        
        }
    });
    return User;
};