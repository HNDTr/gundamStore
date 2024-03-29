const router = require("express").Router();
const { json } = require("express");
const Product = require("../models/Product");
const { verifyTokenAndAdmin } = require("./verifyToken");


//CREATE

router.post("/", verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500),json(error)
    }
})

//UPDATE
router.put("/:id", verifyTokenAndAdmin, async (req, res)=>{
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true}
        );
        res.status(200).json(updatedProduct )
    }catch(err){
        res.status(500).json(err);
    }
})

//DELETE

router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json('Product has been deleted...')
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error)
    }
})

//GET ALL PRODUCT
router.get("/", async (req, res) => {
    const { new: qNew, category: qCategory } = req.query;
    
    try {
        const query = {};
        
        if (qNew) {
            // If 'new' query parameter is provided, set your filter condition here
            query.createdAt = { $gte: new Date(new Date() - 30 * 24 * 60 * 60 * 1000) };
        }
        
        if (qCategory) {
            // If 'category' query parameter is provided, set your filter condition here
            query.categories = { $in: [qCategory] };
        }
        
        const products = await Product.find(query);
        
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json(error);
    }
});



module.exports = router;
