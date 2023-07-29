const express = require('express');
const { contacts: ctrl } = require('../../controllers');
const { ctrlWrapper } = require("../../middlewares");

const router = express.Router()

router.get('/', ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post('/', ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', ctrlWrapper(ctrl.deleteContact));

router.put('/:contactId', ctrlWrapper(ctrl.updateContact));

module.exports = router;
