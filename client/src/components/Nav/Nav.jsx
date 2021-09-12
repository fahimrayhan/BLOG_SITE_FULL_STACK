import React from 'react'
import {Link} from 'react-router-dom'
import "./nav.css"
export default function Nav() {
    return (
        <div className="nav">
            <span className="nav-title">BLOG SITE</span>
            <div className="nav-links">
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
        </div>
    )
}
