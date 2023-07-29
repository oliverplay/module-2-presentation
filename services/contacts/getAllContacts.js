const contactsOperations = require("../../models/contacts");

const getAllContacts = async () => {
    try {
        const data = await contactsOperations.listContacts();
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = getAllContacts;