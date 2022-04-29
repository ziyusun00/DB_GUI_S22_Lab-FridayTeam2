const knex = require('../knex.js');

const PRODUCT_TABLE = 'product';

const createNewProduct = async (name, price, amount, username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username).update({
        name, price, amount
    });
    const result = await query;
    return result;
};
const getProductByFarmer = async (username) => {
    const query = knex(PRODUCT_TABLE).where('farmer_username', username);
    const result = await query;
    return result;
};
const findProductByID = async (id) => {
    const query = knex(PRODUCT_TABLE).where({ id : id });
    const result = await query;
    return result;
};
const updateAmount = async (id, order_amount) => {
    const query1 = knex(PRODUCT_TABLE).where({ id });
    const product = await query1;
    const amount = product[0].amount - order_amount;
    if(amount < 0){
        console.log("err: amount not enough");
        return "err";
    }else{
        console.log('amount:',amount);
        const query = knex(PRODUCT_TABLE).where({ id }).update({ amount : amount });
        const result = await query;
        return result;
    }
};
const updateProductReview = async (id, like_or_dislike ) => {
    const product = await knex(PRODUCT_TABLE).where({ id });
    if(product[0].likes == null){
        product[0].likes == 0;
    }
    if(product[0].dislikes == null){
        product[0].dislikes == 0;
    }
    console.log('product', product[0]);
    var query; 
    if(like_or_dislike == "like"){
        const likes = product[0].likes + 1;
        query = knex(PRODUCT_TABLE).where({ id }).update({ likes : likes });
    }else if(like_or_dislike == "dislike"){
        const dislikes = product[0].dislikes + 1;
        query = knex(PRODUCT_TABLE).where({ id }).update({ dislikes : dislikes });
    }
    const result = await query;
    return result;
};

module.exports = {
    createNewProduct,
    getProductByFarmer,
    findProductByID,
    updateAmount,
    updateProductReview
}