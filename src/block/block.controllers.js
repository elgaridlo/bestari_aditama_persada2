const Block = require("./block.model")


const createBlock = async(req, res, next) => {
    const blockIsExist = await Block.find({name: req.body.name})

    if(blockIsExist.length > 0) {
        res.json({
            message: 'nama blok sudah dipakai!'
        })
        return
    }

    const createSpace = await Block.create(req.body)

    console.log(createSpace)

    req.size = createSpace.size
    req.block_id = createSpace._id

    next()
}

const deleteBlock = async (req,res) => {
    const deleteBlock = await Block.findByIdAndDelete(req.params.id)
    res.json({
        message: 'Berhasil hapus!',
        data: deleteBlock
    })
}

const getAll = async (req, res) => {
    const getDoc = await Block.find()

    res.json({
        doc: getDoc
    })
}

module.exports = {createBlock, deleteBlock, getAll}