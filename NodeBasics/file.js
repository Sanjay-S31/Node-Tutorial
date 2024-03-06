const fileSystem = require('fs') //fs - file system

//reading a file

fileSystem.readFile('./doc/blog.txt', (error,data) => { //readFile is a asynchronous funuction and it takes 
    //more time to execute and the ouput data will be a buffer
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
        console.log(data.toString())
    }
})

//writing files

fileSystem.writeFile('./doc/blog.txt' , "Wrote the text" , ()=>{ // if the file does not exist it creates
    // a new file. It is also async.
    console.log("File was written")
})

//creating and deleting folder

if(fileSystem.existsSync('./folder')){
    fileSystem.rmdir('./folder' , (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Folder deleted")
        }
    })
}
else{
    fileSystem.mkdir('./folder' , (err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Folder created")
        }
    })
}

// similarly we can delete the file by using the unlink() method
// streams is used to send the data into smaller chunks
// createReadStream and createWriteStream method is used to access the file
// readstream.pipe(writestream) -> used to copy the contents from one file to another 
// readstream and writestream are variables 