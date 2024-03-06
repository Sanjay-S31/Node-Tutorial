//const mod = require('./people.js') // require is used to call the js file but cannot access the contents
//console.log(mod) // prints the empty object without the export models

const {arr,val} = require('./people')
console.log(arr,val)

const os = require('os') // importing the os modules
console.log(os.platform() , os.homedir())