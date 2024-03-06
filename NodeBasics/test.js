console.log("Hello World")

//Global object conatins some methods like setTimeout, setInterval etc
//It is different from what is on the window object in the browser

//console.log(global)

setTimeout(() => {
    console.log("Hi")
    clearInterval(interval)
},3000)

const interval = setInterval(() => {
    console.log("Hello") // prints infinite number of times after the duration
},1000)

console.log(__dirname) // to print the absolute path of the directory
console.log(__filename) // to print the absolute path of the file