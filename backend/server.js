const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();

app.use(express.json())
dotenv.config();
app.use(cors());

app.use("/api/recipes", require("./routers/recipes"))
app.get('/health',  (req, res) =>{
   res.status(200).json({message: "ok"});
});

const port = 8000 || process.env.PORT;

const start = async ()=>{
    try {
        require('./db/connect')(process.env.MONGO_URL);
        app.listen(port , () => 
            console.log(`Example app listening on port ${port}!`));
    } catch (error) {
        console.log(error);
    }
};
start();


