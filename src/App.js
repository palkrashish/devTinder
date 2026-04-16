const express = require("express");

const app = express()

app.get('/user', (req, res) => {
    res.send({
        firstname: 'Ashish',
        lastName: 'Pal'
    });
})

app.use("/test", (req, res) => {
    console.log("1st response");
    next()
    res.send("hahaha user");
},

(req, res) =>{
    console.log("2nd response");
    res.send('2nd response');
})


app.listen(3000, () => {
    console.log("Server started on port 3000")
})
