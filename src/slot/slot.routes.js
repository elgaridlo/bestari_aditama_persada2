const express = require('express')
const { getIdByBlockName } = require('../block/block.middleware')
const { getAllSlot, fillSlot, leaveSlot, checkBlockandSlot } = require('./slot.controller')
const router = express.Router()

router.route('/').get(getAllSlot)

router.route('/fillslot').post(checkBlockandSlot, getIdByBlockName, fillSlot)

router.route('/leave/:id').put(leaveSlot)

module.exports = router