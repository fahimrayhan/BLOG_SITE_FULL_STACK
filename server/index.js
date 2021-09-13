const express = require('express');
const cors = require('cors');
require('dotenv').config()
const db = require('./db/db.config')

const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.send("Hello World")
})

// API Requests

// All posts
app.get('/api/posts',(req, res) => {
    db.query("SELECT * FROM post_list", (err,result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

// Post By ID
app.get('/api/posts/:id',(req, res) => {

    const id = req.params.id;

    db.query("SELECT * FROM post_list where id = ?", id, (err,result) => {
        if (err) {
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

// Add new Post
app.post('/api/add-new',(req, res) => {

    const title = req.body.title;
    const text = req.body.post;
    const author = req.body.author;
    const date = new Date();

    db.query("INSERT INTO `post_list`(`author`, `date`, `title`, `post`) VALUES (?,?,?,?)",[author,date,title,text], (err,result) => {
        if (err) {
            console.log(err)
        }
        else{
           console.log("Inserted Successfully")
        }
    })
})

// Delete Post By ID
app.delete("/api/delete/:id",(req,res)=>{
    const id = req.params.id;
    db.query("DELETE FROM `post_list` WHERE `id` = ?",id,(err,result)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log("Deleted Successfully")
        }
    })
})

// Likes Post

app.put("/api/likes/:id",(req,res)=>{
    const id = req.params.id;
    db.query("UPDATE `post_list` SET likes = likes+1 WHERE id = ?",id, (err,result)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log("Update Successfully")
        }
    })
})


const PORT = process.env.PORT || 5051;

app.listen(PORT,(err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Server is running at http://localhost:${PORT}`)
    }
})