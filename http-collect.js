let http = require('http')

http.get(process.argv[2], (res)=>{
    let d = ''
    res.setEncoding('utf-8')
    res.on('data', (data)=>{d += data})
    res.on('end', ()=>{console.log(d.length), console.log(d)})
    res.on('error', console.error)
})
.on('error', (e)=>{
    console.log("Got error: ", e.message)
})