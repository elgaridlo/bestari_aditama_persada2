const Block = require("./block.model")

const getIdByBlockName = async (req, res, next) => {

    // validasi name sudah diisi atau belum?
    if (!req.body.name) {
        res.json({
            message: 'nama blok belum diisi!'
        })
        return
    }
    // Cari Blocknya
    const getOne = await Block.findOne({name: req.body.name})
    
    if (!getOne) {
        res.json({
            message: 'nama blok tidak ditemukan!'
        })
        return
    }

    // masukan ke req.block_id
    req.block_id = getOne._id

    next()
}

const getResponse = async (req, res, next) => {
    res.json({
        status: "OK",
        length: req.total_kosong,
        data: req.data
    })
}

module.exports = {getIdByBlockName, getResponse}