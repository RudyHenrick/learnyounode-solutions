let mymodule = require('./mim-module.js')

mymodule(process.argv[2], process.argv[3], function(err, files){
    if(err)
        return console.error("An error occured", err)

    files.forEach((el)=>{
        console.log(el)
    })
})