require('dotenv').config()
require('./config/dataBase')
const express= require('express')
const Router = require("./routes/route")
const cors = require ("cors")
//se le pone 4000 para que no tenga conflicto
const PORT=4000 

const app= express()

app.use(cors())
app.use(express.json())
app.use("/api", Router)

app.listen(PORT, ()=>{
    console.log('SERVIDOR CORRIENDO EN PUERTO' + PORT);
})
