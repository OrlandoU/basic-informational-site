const fs = require('fs/promises')
const express = require('express')
const path = require("path");
const app = express()


app.use('/contact-me',express.static(__dirname, {index: 'contact-me.html'}))

app.use('/', express.static(__dirname))

app.use('/about', express.static(__dirname, { index: 'about.html' }))

app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/not-found.html')
})

app.listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
})





