const stock = require("../Model/stock")


const getStock = async (req,res)=>{
    try {
        const data = await stock.findOne()
        return res.json({status : true , data :data })

    }catch(err){
        console.log(err.message)
        return res.json({status : false , data : err.message })
    }
}

module.exports = {getStock}