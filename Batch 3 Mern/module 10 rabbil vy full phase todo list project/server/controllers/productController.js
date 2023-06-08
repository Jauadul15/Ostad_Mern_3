const Product = require('../models/productModel');
const user=require("../models/profileModel")
exports.createProduct = async (req, res) => {
    try {
        const { name, price, category, description } = req.body;

        if (!name || !price || !category || !description) {
            return res.status(400).json({ error: 'Missing required fields.' });
        }

        console.log('Creating a new product:', { name, price, category, description });

        const product = new Product({
            name,
            price,
            category,
            description
        });

        console.log('Product object:', product);

        const savedProduct = await product.save();

        if (!savedProduct) {
            throw new Error('Failed to save the product.');
        }

        res.status(201).json({ name: savedProduct.name, price: savedProduct.price });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create the product.' });
    }
};


exports.GetAllProduct=async (req,res)=>{
    try {
        const products=await Product.find();
        res.json(products);

    }catch (error){
        res.status(500).json({error:"Failed to Retrieve Products"})
    }
}
exports.getProductById=async (req,res)=>{
    try {
        const product=await Product.findById(req.params.id);
        if(!product){
            res.status(404).json({error:"Product Not Found"})
        };
        res.json(product);
    }catch (error) {
        res.status(500).json({error:"Failed to Retrieve Product"})
    };
};

exports.UpdateProductById=async (req,res)=>{
    try {
        const product=await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true
        });
        if(!product){
            return res.status(404).json({ error: 'Product not found.' });
        };
        res.json(product);

    }catch (error) {
        res.status(500).json({ error: 'Failed to update the product.' });
    }
}

exports.deleteProductById = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found.' });
        }
        res.json({ message: 'Product deleted successfully.' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the product.' });
    }
};