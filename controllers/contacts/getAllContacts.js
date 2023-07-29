const { contacts: service } = require('../../services');

const getAllContacts = async (req, res, next) => {
    const contacts = await service.getAllContacts()
    res.json({
        status: 'success',
        code: 200,
        data: {
            result: contacts
        }
    });
};

module.exports = getAllContacts;

// =============================================================
// const contactsOperations = require("../../models/contacts");

// const getAllContacts = async (req, res) => {
//     const contacts = await contactsOperations.listContacts();
//     res.json({
//         status: "success",
//         code: 200,
//         data: {
//             result: contacts
//         }
//     });
// };

// module.exports = getAllContacts;