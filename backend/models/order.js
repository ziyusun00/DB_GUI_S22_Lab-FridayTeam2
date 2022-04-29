const knex = require('../knex.js');

const ORDER_TABLE = 'order';

const createNewOrder = async (farmer_username, rest_owner_username, product_id, amount, tip) => {
    const query = knex(ORDER_TABLE).insert({ farmer_username, rest_owner_username, product_id, amount, tip });
    console.log('Raw query for createNewOrder:', query.toString());
    const result = await query;

    return result;
};

module.exports = {
    createNewOrder
}