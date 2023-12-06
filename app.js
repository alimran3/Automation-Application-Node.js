const http=require('http');
const server = http.createServer(()=>{
    if(req.url=='/')
    {
        res.write('You have opended a page');
    }
    else if(req.url=='/about us')
         res.write('This is about us page');
    else
         res.write('This page is not available');

         res.end();
})

server.listen(3000);
console.log("listening on port 3000");