const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const app =http.createServer(function(request,response) {
    let url = request.url;
    console.log(url);
    console.log("respone :" + response);
    console.log("request : " + request);
    if(url == '/') {
        url = '/index.html'
    } else if(url == '/blog') {
        url = '/blog.html';
    } else if( url == '/favicon.ico') {
    return response.writeHead(404);
    } else {
        response.writeHead(404);
        response.end('Not found')
    }
    response.writeHead(200)
    response.end(fs.readFileSync(__dirname+url));
});
app.listen(3000);