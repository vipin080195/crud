require('dotenv').config();
const express = require('express');
const cors = require("cors");

const connectDB = require('./config/db');

const app = express();
const data = require('../server/models/data_models');
const ObjectId = require('mongoose/lib/types/objectid');


// routes
const dataroutes = require('./routes/data_routes');

// connect database
connectDB();

// cors
app.use(
    cors({
      origin: '*',
    }),
  );
// const corsOptions = {
//     origin: /\.onrender\.com$/,
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
// };
// app.use(cors(corsOptions));

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server is running"));


// use routes
app.use('/api/data', dataroutes);

app.post("/update",async (req,res)=>{
  try{
    console.log(req.body)
   let upateData = await data.findByIdAndUpdate({_id:new ObjectId(req.body.dataId)},{data:req.body.updatedata})
   return res.status(200).json({
    Success: 'True',
    upadated:upateData,
    Message: 'Data inserted succesfully',
    SuccessCode: 200,
  });
  } catch(error){
    console.log(error)
   return res.send(error)
  }
})

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`));