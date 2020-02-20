const express = require("express");
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});
app.get("/contact", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'))
});

app.listen(PORT, err => {
    if(err) console.log("ERROR", err)

    console.log(`Listening on port ${PORT}`)
})
