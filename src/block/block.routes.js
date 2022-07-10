const express = require('express')
const { createSlot, checkBlockandSlot, fillSlot } = require('../slot/slot.controller')
const { createBlock, deleteBlock, getAll } = require('./block.controllers')
const { getIdByBlockName, getResponse } = require('./block.middleware')
const router = express.Router()

router.route('/check/:id').get(checkBlockandSlot, getResponse)

router.route('/')
    .post(createBlock, createSlot)
    .get(getAll)

router.route('/:id').delete(deleteBlock)

module.exports = router