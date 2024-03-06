const express = require('express')
const Blog = require('../models/blog') // Blog is the model
const router = express.Router()

router.get('/' , (req,res) => {
    Blog.find().sort({ createdAt: -1 })
    .then(result => {
        res.render('index' ,{title : "Home Page" , blogs: result})
    })
    .catch(error => { console.log("Error occured ",error) })
})

router.post('/', (req,res) => {
    console.log(req.body);
    const blog = new Blog(req.body)
    blog.save()
    .then(() => res.redirect('/blogs'))
    .catch(error => console.log(error))
})

router.get('/create' , (request, response) => {
    response.render('create', {title : "Create Blog"})
})

router.get('/:id' , (req,res) => {
    const id = req.params.id
    Blog.findById(id)
    .then((result) => {
        res.render('details', { blog :result , title : "Blog Details"})
    })
    .catch(error => {
        res.status(404).render('404', {title:"Blog Not Found"})
    })
})

router.delete('/:id' , (req,res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
    .then((result) => {
        res.json({ redirect:'/blogs' })  // server sends json data as response
    })
    .catch(error => console.log(error))
})



module.exports = router