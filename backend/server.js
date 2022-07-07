const http = require('http');
const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose= require('mongoose');
const path = require('path');

mongoose
    .connect(process.env.MONGODB_ATLAS)
    .then(()=>{
        console.log("connect successfull");
    })
    .catch( (err)=>{
        console.log("problem in connect",err.message,err);
    })

const app = express();
const port=process.env.PORT || 3000;

let tasks = require ('./routes/tasks/');
let users = require('./routes/users/');

app.use("/images",express.static(path.join('images')));
app.use("/",express.static(path.join('todolist-mean-frontend')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET, POST, PUT, PATCH, DELETE, OPTIONS")
        next();
})

app.set('port',port);

app.use('/api/tasks/',tasks);
app.use('/api/users/',users);
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'todolist-mean-frontend','index.html'));
})

const server = http.createServer(app);

server.on('error',(err)=>{
    console.log("error in server",err.message,err);
})

server.on('listening',()=>{
    console.log("i am listening in port",port);
})
server.listen(port);

//  mogi
// GqRc2tMJWnTnatOh
// "mongodb+srv://mogi:<password>@cluster0.szyq4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority