var http = require('http')
var fs = require('fs')

const hostname = '127.0.0.1';

http.createServer(
    (req, res) => {
        console.log(req.url);
        if ( req.url === '/'){
            fs.readFile('index.html',(err,data)=>{
                if ( err ) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end;    
            } )
        }
        else if ( req.url === '/about'){
            fs.readFile('about.html',(err,data)=>{
                if ( err ) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end;    
            })
        }
        else if ( req.url === '/contact'){
            fs.readFile('contact.html',(err,data)=>{
                if ( err ) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end;    
            } )
        }
        else{
            fs.readFile('404.html',(err,data)=>{
                if ( err ) throw err;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end;    
            } )

        }

    }
).listen(6969,hostname,()=>{console.log('Server is running at port 6969')});