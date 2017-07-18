let fs = require('fs')
let arr = [], ext = process.argv[3];
let regex = new RegExp(".+[.]" + ext + "$");

function findFiles(showList){
    fs.readdir(process.argv[2], (err, files) =>{
        arr = files.filter((fileSelected) =>{
            return fileSelected.match(regex)        
        })
        showList()
    })
}

function listOfFiles(){
    arr.forEach((val)=>{
        console.log(val)
    })
}

findFiles(listOfFiles)