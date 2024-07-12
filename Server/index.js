const express = require("express");
const app = express();
const {MongoClient} = require('mongodb');
const http = require("http");
const cors = require('cors');
const dotenv = require('dotenv');
const { Server } = require("socket.io");
app.use(cors());
dotenv.config({path:'./config/config.env'})
const server = http.createServer(app);
const uri = process.env.MONGO_URI;
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  },
});
groups={}
      const client = new MongoClient(uri);
      client.connect().then(()=>{console.log('connected to the mongo server')}).catch(()=>{console.log(error.message)});
io.on("connection", (socket) => {
  console.log(`${socket.id} has entered the server`);
  
  socket.on('create_room', async(data)=>{
   try{
    const database = client.db('Tutor');
    const collection = database.collection('Students');
    const subject = data.Subject;
    console.log(subject);
    console.log(data.Name);
    let students = await collection.aggregate([
       {$match:{ [subject]: {$lt:50} }},        
       {$sample:{size:3}}
    ]).toArray();
     console.log(students);
     groups[data.Name]= students;
     socket.join(data.Name);
   }catch{
     console.log((error)=>{error.message});
   }
  })

  socket.on("join_room", (data) => {
    console.log('hello');
    Object.entries(groups).forEach(([id,members])=>{
        console.log('entering');
        members.forEach((member)=>{
            if(member.Name===data){
                socket.join(id);
               socket.emit("joined_room",id);
                console.log('joined');
            }
        });
       })
    });

  socket.on("send", (data) => {
    console.log(data.room);
   socket.to(data.room).emit("receive", data);
  });

  socket.on("disconnect", () => {
    console.log(`${socket.id} has disconnected from the server`);
  });
});

server.listen(process.env.PORT, () => {
  console.log("SERVER IS LISTENING");
});