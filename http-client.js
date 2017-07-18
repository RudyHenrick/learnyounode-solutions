let http = require('http')

http.get('http://nodejs.org/dist/index.json', (res)=>{
    res.setEncoding('utf-8')
    res.on('data', (data)=>{console.log(data)})
    res.on('error', console.error)
})
.on('error', (e)=>{
    console.log("Got error: ", e.message)
})