const arr = ['sanjay' , 'max' ,'john']
const val = [10,20,30,40]
console.log(arr)

//module.exports = arr // single export is used to send this value to the file calling it 

module.exports = {arr,val} // multiple exports