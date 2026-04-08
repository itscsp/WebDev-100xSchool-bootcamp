const express = require('express');
const {authMiddleware} = require("./middleware")

const app = express();

app.post("/signup", (req, res) => {

})

app.post("/signin", (req, res) => {
    
})

app.post("/todo", authMiddleware, (req, res) => {
    
})

app.get("/todos", authMiddleware, (req, res) => {
    
})