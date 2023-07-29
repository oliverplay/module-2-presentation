const createError = require('http-errors');
const { contacts: service } = require('../../services');

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await service.getContactById(contactId);
    if (!result) {
        throw createError(404, `Not found`);
    };
    res.json({
        status: "success",
        code: 200,
        data: {
            result
        }
    });
};

module.exports = getContactById;

// ===================================================
// const createError = require('http-errors');
// const contactsOperations = require('../../models/contacts');

// const getContactById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await contactsOperations.getContactById(contactId);
//     if (!result) {
//         throw createError(404, `Not found`);
//     };
//     res.json({
//         status: "success",
//         code: 200,
//         data: {
//             result
//         }
//     });
// };

// module.exports = getContactById;