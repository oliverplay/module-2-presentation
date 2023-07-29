const contactsOperations = require("../../models/contacts");

const deleteContact = async (contactId) => {
    try {
        const data = await contactsOperations.removeContact(contactId);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = deleteContact;