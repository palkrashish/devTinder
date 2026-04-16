const express = require("express");

const app = express()

app.get('/user', (req, res) => {
    res.send({
        firstname: 'Ashish',
        lastName: 'Pal'
    });
})

app.use("/test", (req, res) => {
    // res.send("hahaha user");
},

(req, res) =>{
    res.send('2nd response');
})


app.listen(3000, () => {
    console.log("Server started on port 3000")
})
