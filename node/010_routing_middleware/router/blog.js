const express = require('express');
const fs = require('fs');
const path =require('path');
const router = express.Router();

router.get('/',(req,res,next)=> {
    res.end(fs.readFileSync(path.join(_ccdirnmae,'../res/blog.html')));
})

router.get('/:id',(req,res,next)=>{
    res.send(req.params.id + 'page!!');
})

module.exports = router;