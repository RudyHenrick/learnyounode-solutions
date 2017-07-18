let http = require('http')
let map = require('through2-map')

let server = http.createServer((req, res) =>{
    req.pipe(map((chunck) =>{
        return chunck.toString().toUpperCase()
    })).pipe(res)
})
server.listen(process.argv[2])