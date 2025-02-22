const express = require('express')

const app = express();

app.get('/' ,(req , res) => {
    res.json({mssg: "routes run okay"})
})

app.listen(4000 , ()=> {
    console.log("Server runs on port 4000")
})