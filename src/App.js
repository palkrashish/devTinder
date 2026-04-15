const express = require("express");

const app = express()

app.get((req, res) => {
    res.send("ha ha ha ha!")
})

app.get("/", (req, res) => {
    res.send("Hello World!")
})

app.get("/main", (req, res) => {
    res.send("Hello Main!")
})

app.get('/fetch', (req, res) => {
    res.send('Hell fetch!')
})

app.get('/Test', (req, res) => {
    res.send({
         firstname: 'Ashish',
         lastName :'Pal'
        });
})

app.post('/user', (req, res) => {
    // Saveing data into DB
    res.send("Data has been saved successfully")
})


app.delete('/user', (req, res) => {
    // Deleting data from DB
    res.send("Data has been deleted successfully")
})

app.put('/user', (req, res) => {
    // Updating data in DB
    res.send("Data has been updated successfully")
})

// This is handle all type of request
app.use("/exampleuse", (req, res)=>{
res.send('Example of use')
})

app.get('/ashish', (req, res) => {
    res.send('Hell ashish!')
})

app.listen(3000, () => {
    console.log("Server started on port 3000")
})
