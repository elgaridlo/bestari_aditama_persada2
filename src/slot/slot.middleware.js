const Slot = require("./slot.model")

const checkCarNumberExist = async (carNumber) => {
    const checkplat = await Slot.find({car_number: carNumber.replace(/ /g,'')})

    if(checkplat.length > 0) {
        return true
    }
    return false
}

module.exports = {checkCarNumberExist}