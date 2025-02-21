const express = require("express");

const app = express();
const  port  = 8080;
function requestLogger(request, response ,next){
    console.log(`Request Method : ${request.method},  URL: ${request.url}`);
    next(); // passing control to the next middleware / router handler
}
    app.use(requestLogger); //we then apply the middleware to all routes

    app.get('/' , (request, response)  => {
        response.send('Hello,world!');
    });
app.get('/',(req,res)=>{
    res.send("Hello, world!");
})

app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
    
})

