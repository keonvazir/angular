const mongoose = require("mongoose");
const Product = mongoose.model("Product");

module.exports = {
    index(req, res){
        Product.find()
        .then(products => res.json(products))
        .catch(err =>res.json(err));
    },
    show(req, res){
        Product.findById(req.params.id)
        .then(products => res.json(products))
        .catch(err =>res.json(err));
    },
    addProudct(req, res){
        Product.create(req.body)
        .then(products => res.json(products))
        .catch(err =>res.json(err));
    },
    editProduct(req, res){
        Product.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true, context: 'query'})
        .then(products => res.json(products))
        .catch(err =>res.json(err));
    },
    deleteProduct(req, res){
        Product.findByIdAndDelete(req.params.id)
        .then(results => res.json(results))
        .catch(err =>res.json(err));
    }
    
    
}