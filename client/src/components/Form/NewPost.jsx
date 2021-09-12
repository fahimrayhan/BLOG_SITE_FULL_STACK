import React, { useEffect, useState } from 'react'
import "./newPost.css"
import Axios from "axios"

export default function NewPost() {

    const [author,setAuthor] = useState("")
    const [title,setTitle] = useState("")
    const [post,setPost] = useState("")

    const submitPost = () =>{
        Axios.post("http://localhost:5050/api/add-new",{title:title,author:author,post:post})
    }

    useEffect(() => {
        console.log(title+" "+post+" "+author+" ")
    }, [title,post,author])

    return (
        <div className="postForm">
            <form className="form">
                <label htmlFor="title">Title: </label>
                <input type="text" name="title" id="title" required
                    onChange={(e)=>{
                        setTitle(e.target.value);
                    }}
                />
                <label htmlFor="post">Post: </label>
                <textarea name="post" id="post"
                    onChange={(e) => {
                        setPost(e.target.value);
                    }}
                />
                <select onChange={(e)=>{
                    setAuthor(e.currentTarget.value)
                }}>
                    <option value="Fahim Rayhan">Fahim Rayhan</option>
                    <option value="Shafayat Anabil">Shafayat Anabil</option>
                    <option value="Rizbi Prito">Rizbi Prito</option>
                    <option value="Sulaiman Sukhon">Sulaiman Sukhon</option>
                </select>
                <div className="button">
                    <button onClick={submitPost}>Submit</button>
                </div>
            </form>
        </div>
    )
}
