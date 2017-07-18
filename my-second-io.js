let fs = require("fs")

buffer = fs.readFile(process.argv[2], function finnishedReading(err, data){
    console.log(data.toString().split("\n").length - 1)
})