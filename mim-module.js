let fs = require('fs')

module.exports = function(dirPath, fileExt, callback){
    fs.readdir(dirPath, (err, files) =>{
        if(err)
            return callback(err)

        let regex = new RegExp(".+[.]" + fileExt + "$");
        files = files.filter((el)=>{
            return el.match(regex)
        })

        callback(null, files)
    })
}