// http, fs are the modules that are built on the node 
// by using the require method we importing it
const http = require('http')
const fileSystem = require('fs')
const _ = require('lodash') // 3rd party module

const server = http.createServer((request,response) =>{
    console.log("Request made")
    //console.log(request)
    //console.log(request.method , request.url)

    const num = _.random(0,20)
    console.log(num)
    // _.once() is used to run the function only once

    let path = "./templates/"
    switch(request.url){
        case '/':
            path+="index.html"
            response.statusCode = 200 //setting up the status code
            break
        case '/about':
            path+="about.html"
            response.statusCode = 200
            break
        case '/about-me': 
            response.statusCode = 301 // moving the file
            response.setHeader('Location' , '/about') // used for redirecting a page
            response.end()
            break
        default:
            path+="404.html"
            response.statusCode = 404
            break
    }

    // setting the header content type 
    response.setHeader('Content-Type' , 'text/html')

    // directly writing to the browser
    // response.write("<h1>Hello World</h1>")
    // response.write("<h3>Response made</h3>")

    // using a file writing to the browser
    fileSystem.readFile(path , (error,data) =>{
        if(error){
            console.log("Error occured "+error)
        }
        else{
            response.write(data)
            //response.end(data) -> if the data is a single file means we can use like this
        }
        response.end()
    })
})
//currently the server is not active 

server.listen(4000,'localhost' ,() =>{ //listen for requests 
    console.log("listening")
}) 