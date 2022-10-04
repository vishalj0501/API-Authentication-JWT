const router = require('express').Router()
const verify = require('./verifytoken')

router.get('/',verify,(req,res)=>{
res.json({
    posts:{
        title: "My 1st Post",
        description: "data404"
        }
    });
});


module.exports= router