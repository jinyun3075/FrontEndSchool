const express = require('express');
let blogs = require('../database/datablog.js')

const router = express.Router();

// * / url 에 최신 게시글 3개 응답
// * /blog - 블로그 글 모두 응답
// * /blog?section=it -it관련된 글 모두 응답

router.get('/',(req,res, next)=> {
    // console.log(req,query);
    const section = req.query.section;
    const data = section ? blogs.filter(blog=>blog.section===section) : blogs;
    res.status(200).json(data);
});

router.get('/:id',(req,res,next)=> {
    console.log(req.params);
    const {id} = req.params;
    const data = blogs.find(blog=>blog.id=== +id);

    res.status(200).json(data);
})
router.post('/',(req,res, next)=> {
    console.log(req.body);
    const id =blogs.length+1;
    const title = req.body.title;
    const content = req.body.content;
    const section = req.body.section;
    const viewCount = 0;
    const pubDate = new Date().toString();
    const modDate = new Date().toString();
    const blog = {id,title,content,section,viewCount,pubDate,modDate};

    blogs.push(blog);
    res.status(201).json(blogs);
})
router.put('/:id',(req,res, next)=> {
    const id = req.params.id;
    const data = blogs.find(blog => blog.id === +id);
    const {title,content,section} = req.body;
    if(data) {
        data.title = title;
        data.content = content;
        data.section = section;
        data.modeDate = new Date().toString();
        res.status(200).json(blogs);
    } else {
        res.status(404);
    }
})
router.delete('/:id',(req,res, next)=> {
    const {id} = req.params;
    blogs = blogs.filter(b=>b.id != id);
    res.status(200).json(blogs);
});

module.exports = router;