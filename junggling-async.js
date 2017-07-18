let http = require('http')

function httpGet(index, callback){
    http.get(process.argv[index], (res)=>{
        let d = ''
        res.setEncoding('utf8')
        res.on('data', (data)=>{d+=data})
        res.on('end', ()=>{
            return callback(d)
        })
    })
}

httpGet(2,(d) =>{
    console.log(d)
    httpGet(3, (d)=>{
        console.log(d)
        httpGet(4, (d) =>{
            console.log(d)
        })
    })
})