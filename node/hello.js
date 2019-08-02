var http=require('http');
http.createServer(function (request,response){
	response.writeHead(200, {'content-type': 'text/plain', Pragma: 'no-cache'});
	response.write('Hello World\nIt is my page');
	response.end();
		}
).listen(8181);
console.log('Server on port 8181');