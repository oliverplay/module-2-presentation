const createError = require('http-errors');
const { contacts: service } = require('../../services');

const deleteContact = async (req, res) => {
    const { contactId } = req.params;
    const result = await service.deleteContact(contactId);
    if (!result) {
        throw createError(404, "not found");
    };
    res.json({
        status: "success",
        code: 200,
        message: "contact deleted",
        data: {
            result
        }
    });
};

module.exports = deleteContact;

// =================================================================
// const createError = require('http-errors');
// const contactsOperations = require('../../models/contacts');

// const deleteContact = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contactsOperations.removeContact(contactId);
//     if (!result) {
//         throw createError(404, "not found");
//     };
//     res.json({
//         status: "success",
//         code: 200,
//         message: "contact deleted",
//         data: {
//             result
//         }
//     });
// };

// module.exports = deleteContact;