import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav() {
    return (
        <div>
            <span className="nav-title">BLOG SITE</span>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/add-new">Add New</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </div>
    )
}
