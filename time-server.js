let net = require('net')
let date = new Date()

let server = net.createServer((socket)=>{
    socket.write(date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + date.getDate() + ' ' + 
            date.getHours() + ':' + date.getMinutes() + '\n')
    socket.end()
})
server.listen(process.argv[2])