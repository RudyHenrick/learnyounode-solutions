let http = require('http')
let url = require('url')
let isoEndPoint = '/api/parsetime'
let unixEndPoint = '/api/unixtime'

let server = http.createServer((req, res) =>{
    res.writeHead(200, {'content-type': 'application/json'})
    let q = url.parse(req.url, true)
    let time = new Date(q.query.iso)

    if(q.pathname === isoEndPoint){
        res.write(JSON.stringify({hour: time.getHours(), minute : time.getMinutes(), second:time.getSeconds()}))
    }
    else if(q.pathname === unixEndPoint){
        res.write(JSON.stringify({unixtime: time.getTime()}))
    }
    res.end()
    
})
server.listen(process.argv[2])