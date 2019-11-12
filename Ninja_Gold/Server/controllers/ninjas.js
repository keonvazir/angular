const mongoose = require("mongoose");
const Ninja = mongoose.model("User");

module.exports = {
    ninjas: (req, res)=>{
        let ninjas = Ninja.find({}, (err, ninjas)=>{
            if(err){
                res.json({message: "Error!", error: err});
            }else{
                res.json({message: "Success!", data: ninjas})
            }
        })
    }
}