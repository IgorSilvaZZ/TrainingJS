const mongoose = require('mongoose');

const Produto = mongoose.model('Produto');

module.exports = {

    async index(req, res){
        const produtosAll = await Produto.find();

        return res.json(produtosAll);
    },

    async createProduto(req, res){
        const produtoCreate = await Produto.create(req.body);

        return res.json(produtoCreate);
    },

    async oneProduto(req, res){
        const produtoOne = await Produto.findById(req.params.id);

        return res.json(produtoOne);
    },

    async updateProduto(req, res){
        const produtoUpdate = await Produto.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(produtoUpdate);
    },

    async deleteProduto(req, res){
        const produtoDelete = await Produto.findByIdAndRemove(req.params.id);

        return res.json(produtoDelete);
    }

}