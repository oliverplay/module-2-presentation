const contactsOperations = require("../../models/contacts");

const getContactById = async (contactId) => {
    try {
        const data = await contactsOperations.getContactById(contactId);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = getContactById;