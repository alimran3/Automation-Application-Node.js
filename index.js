const http=require('http');
const server = http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.write('You have opened a page');
    }
    else if(req.url==='/about us')
         res.write('This is about us page');
    else
         res.write('This page is not available');

         res.end();
})

server.listen(3099);
console.log("listening on port 3099");