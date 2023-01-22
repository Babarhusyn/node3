const express = require('express');
const app = express();
const mongoose = require('mongoose');







mongoose.set('strictQuery', false);




const url = 'mongodb+srv://babarhusyn:babar111@cluster0.qczoki3.mongodb.net/asdasd'


mongoose.connect(url,




).then(() => {
    console.log("connection sucessfull");
}).catch((err) =>
    console.log(err)
)


//middleWare
const middleware = (req, res, next) => {
    console.log("hello middleware")
    next();
};

app.get('/', (req, res) => {
    res.send("hello server")
});
app.get('/about', middleware, (req, res) => {
    console.log("about middleware");
    res.send("hello server from about")
});
app.get('/contact', (req, res) => {
    res.send("hello server from contact")
});
app.get('/services', (req, res) => {
    res.send("hello server from services")
});
app.listen(5001, () => {
    console.log("server is working on port 3500")
});