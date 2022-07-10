const Block = require("../block/block.model")
const { checkCarNumberExist } = require("./slot.middleware")
const Slot = require("./slot.model")

const createSlot = async (req, res, next) => {

    console.log('req.block_id = ', req.block_id)
    const slot = generateParkingSlot(req.block_id, req.size)
    console.log('slot = ', slot)

    const createSlotDoc = await Slot.create(slot)

    res.json({
        message: 'Berhasil membuat slot parking',
        data: createSlotDoc
    })
}

const generateParkingSlot = (id, size) => {
    let slot = []

    for (let i = 0; i < size; i++) {
        slot.push({ block_id: id, slot_number: i + 1, isEmpty: true })
    }

    return slot
}

const checkBlockandSlot = async (req, res, next) => {
    // const doc = await Slot.find({block_id: req.body.block_id}).populate('block_id', 'name').exec()
    let name
    if(req.method === 'POST' || req.method === 'PUT') {
        name = req.body.name.toUpperCase()
    } else if (req.method === 'GET') {
        name = req.params.id.toUpperCase()
    }

    const data = await Block.aggregate([
        {
            $lookup: {
                from: "slots",
                localField: '_id',
                foreignField: 'block_id',
                pipeline: [
                    {
                        $match: {
                            $and: [{ "isEmpty": true }]
                        }
                    }
                ],
                as: "slotdata"
            }
        }, {
            $match: {
                name: name
            }
        }
    ])

    req.total_kosong = data[0].slotdata.length
    req.data = data

    next()
    // res.json({
    //     total_kosong: data[0].slotdata.length,
    //     data
    // })
}

const getAllSlot = async (req, res, next) => {
    const data = await Slot.find().populate('block_id', 'name')

    res.json({
        data
    })
}

const fillSlot = async (req, res, next) => {

    if (req.total_kosong === 0) {
        res.json({
            message: 'Semua blok Penuh'
        })
        return
    }

    if (!req.body.car_number) {
        res.json({
            message: 'nomor mobil wajib diisi!'
        })
        return
    }

    // Check nomor plat tidak boleh sama
    const existCarNumber = await checkCarNumberExist(req.body.car_number)

    if (existCarNumber) {
        res.json({
            message: 'Nomor mobil tidak boleh sama!'
        })
        return
    }

    const fill = await Slot.findOneAndUpdate({ block_id: req.block_id, isEmpty: true }, {
        isEmpty: false,
        car_number: req.body.car_number.replace(/ /g, '')
    }, { new: true })

    res.json({
        message: fill
    })
}

const leaveSlot = async (req, res, next) => {

    const existCarNumber = await checkCarNumberExist(req.params.id, res)

    if (!existCarNumber) {
        res.json({
            message: 'Nomor mobil tidak ditemukan!'
        })
        return
    }

    const leave = await Slot.findOneAndUpdate({ car_number: req.params.id.replace(/ /g, '') },
        {
            isEmpty: true,
            car_number: 'available'
        }, {
        new: true
    }
    ).populate('block_id')

    res.json({
        data: leave
    })
}

module.exports = { createSlot, checkBlockandSlot, getAllSlot, fillSlot, leaveSlot }