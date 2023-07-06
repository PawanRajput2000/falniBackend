const stock  = require('../Model/stock')

const createStock = async(req,res)=>{
    try { 
        
       let body = req.body
       let data = await stock.create(body)
       return res.json({status : true , data : data})

    }catch(err){
        console.log(err.message)
        return res.json({status : false , data : err.message})
    }
}


module.exports = {createStock}