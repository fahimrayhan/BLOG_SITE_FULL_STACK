import Nav from 'components/Nav/Nav'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Home() {

    const [postList,setPostList] = useState([])

    const postLike = (id) => {
        Axios.put(`http://localhost:5050/api/likes/${id}`).then((response) => {
            alert("You liked a post")
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:5050/api/posts").then((response) => {
            setPostList(response.data)
        })
        
    })

    return (
        <div>
            <Nav/>
            <div className="Posts">
                {postList.map((post,key) => {
                    return(
                        <div className="PostCard" key={key}>
                            <h1>{post.title}</h1>
                            <div>{post.post}</div>
                            <p>{post.author}</p>
                            <p>{post.date}</p>
                            <p>Likes: {post.likes}</p>
                            <button onClick={()=>{
                                postLike(post.id)
                            }}>Like</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
