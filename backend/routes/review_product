const express = require('express');
const product = require('../models/product');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {
        const body = req.body;
        const result = await product.updateProductReview(body.product_id, body.like_or_dislike);//create review
        res.status(201).json(result);
    } catch (err) {
        console.error('Failed to create new review:', err);
        res.status(500).json({ message: err.toString() });
    }
    next();
});

module.exports = router;