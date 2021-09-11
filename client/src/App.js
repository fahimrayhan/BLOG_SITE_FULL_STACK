import About from 'pages/About'
import CreatePost from 'pages/CreatePost'
import Home from 'pages/Home'
import Post from 'pages/Post'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import "./App.css"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/add-new" exact component={CreatePost} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/post/:id" exact>
            <Post props={} />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </div>
  )
}
