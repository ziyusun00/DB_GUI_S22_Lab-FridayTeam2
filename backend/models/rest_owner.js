const knex = require('../knex.js');

const REST_OWNER_TABLE = 'rest_owner';

const createNewOwner = async (username, address, phone_num) => {

    const query = knex(REST_OWNER_TABLE).insert({ username: username, address: address, phone_num: phone_num});
    console.log('Raw query for createNewUser:', query.toString());
    const result = await query;

    return result;
};

const findUserByUsername = async (username) => {
    const query = knex(REST_OWNER_TABLE).where({ username : username });
    console.log(query);
    const result = await query;
    return result;
};

const updateProfile = async (username, street_address, city, state, zip, phone_num) => {
    const query = await knex(REST_OWNER_TABLE).where({ username }).update({
        street_address, city, state, zip, phone_num
    });
    const result = await knex(REST_OWNER_TABLE).where({ username });
};
const changeAddress = async (body, restId) => {
    const newAddress = body.address;

    const changeAddy = knex(REST_OWNER_TABLE).where({id : restId}).update({address:newAddress});
    console.log(`Raw query for changeAddress: `, changeAddy.toString());
    const result = await changeAddy;
    return result;
};

const deleteAddress = async(body, restId) =>{
    const address = knex(REST_OWNER_TABLE).where({id : restId}).update({address: " "}); 
    //Not sure if this is how to do this-- don't actually want to delete anything from database
    const result = await address;
    return result;
};

module.exports = {
    createNewOwner,
    findUserByUsername,
    updateProfile,
    changeAddress,
    deleteAddress
};