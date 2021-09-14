import Nav from 'components/Nav/Nav'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from 'axios'
export default function Post() {

    let {id} = useParams();

    const [post,setPost] = useState({});

    useEffect(() => {
        Axios.get(`http://localhost:5050/api/posts/${id}`).then((response) => {
            setPost(
                {
                    title: response.data[0].title,
                    post: response.data[0].post,
                    author: response.data[0].author,
                    date: response.data[0].date,
                    likes: response.data[0].likes,
                    id: response.data[0].id,
                }
            )
        })
    }, [])

    const postLike = (pid) => {
        Axios.put(`http://localhost:5050/api/likes/${pid}`).then((response) => {
            alert("You liked a post")
        })
    }

    return (
        <div>
            <Nav/>
            <h1>Hello</h1>
            <div className="PostCard">
                <h1>{post.title}</h1>
                <div>{post.post}</div>
                <p>{post.author}</p>
                <p>{post.date}</p>
                <p>Likes: {post.likes}</p>
                <button onClick={() => {
                    postLike(post.id)
                }}>Like</button>
            </div>
        </div>
    )
}
