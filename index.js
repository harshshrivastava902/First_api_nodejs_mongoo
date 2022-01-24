const http=require('http')
const app=require('./App')

const server=http.createServer(app)

server.listen(8000,"localhost",()=>
{
    console.log("SERVER running on port 8000 ");
})