const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: String,
        required: true
    }
});

mongoose.model('Produto', ProdutoSchema);