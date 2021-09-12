import Nav from 'components/Nav/Nav'
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Home() {

    const [postList,setPostList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:5050/api/posts").then((response) => {
            setPostList(response.data)
        })
        
    })

    return (
        <div>
            <Nav/>
            <div className="Posts">
                {postList.map((post) => {
                    return(
                        <div>
                            <h1>{post.title}</h1>
                            <div>{post.post}</div>
                            <p>{post.author}</p>
                            <p>{post.date}</p>
                            <p>{post.likes}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
