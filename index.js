const http = require('http')


const server = http.createServer((req,res) => {
	res.writeHead(200,{ 'Content-type':'text/plain' })
	res.end('okay')
})




server.listen(3000,'127.0.0.1',()=>{
	console.log('server running')
})
