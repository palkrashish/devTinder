const express = require("express");

const app = express()

app.get('/user', (req, res) => {
    res.send({
        firstname: 'Ashish',
        lastName: 'Pal'
    });
})

app.use("/test", (req, res, next) => {
    console.log("1st response");
    res.send("hahaha user");
    next()
},

    (req, res) => {
        console.log("2nd response");
        res.send('2nd response');
    })


app.listen(3000, () => {
    console.log("Server started on port 3000")
})
