const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
// run npm install  
const app = express() // creating an instance of an express app

//connecting to db
const db = 'mongodb://localhost:27017/Blogger'
mongoose.connect(db)
    .then((result) => {
        console.log("Database connected")
        app.listen(4000) // 4000 - port number
    }).catch(error => {
        console.log(error)
    })

//register view engine
app.set('view engine','ejs') // setting the app such that it uses ejs

// inserting a blog to the database
// app.get('/add-blog' , (request,response) => {
//     const blog = new Blog({
//         title : "Node tutorial",
//         snippet : "First Blog",
//         body : "Fisrt time learning node"
//     })
//     blog.save()
//     .then(result => { response.send(result) })
//     .catch(error => { console.log(error) })
// })

// displaying all the blogs to the database
app.get('/all-blogs' , (req ,res) => {
    Blog.find() // can also use findById('<id>') to get a single blog 
    .then(result => res.send(result))
    .catch(error => console.log(error))
})

//get() , use() are middleware -> that runs between request and response

app.use((req,res,next) => {
    console.log("New request is made")
    console.log("Host ", req.hostname)
    console.log("Path ",req.path)
    console.log("Mehtod ",req.method)
    next() // it tells to move to the next part 
})

//middleware and static files
app.use(express.static('public')) // making the css file to public and accessing it 
app.use(morgan('dev')) // 3rd party middleware shows the url of the page [ op => GET / 304 36.509 ms - - ]
app.use(express.urlencoded({extended:true})) //used to accept form data using post request


app.get('/' , (request, response) => {
    //using express
    //response.send("<h1>HEllo</h1>") 
    // it automatically set the content type of the header and also infers the statuscode
    //response.sendFile('./templates/index.html' , {root:__dirname})

    //using ejs
    response.redirect('/blogs')
})

app.get('/about' , (request, response) => {
    //response.sendFile('./templates/about.html' , {root:__dirname})
    response.render('about' , {title : "About Page"})
})

//redirecting
app.get('/about-us' , (request, response) => {
    response.redirect('/about')
})

// Blogs Related Pages
app.use('/blogs',blogRoutes)

// 404 - page not found 
app.use((request, response) => { // fires for every request 
    //response.status(404).sendFile('./templates/404.html' , {root:__dirname})
    response.status(404).render('404',{title : "Page Not Found"})
})