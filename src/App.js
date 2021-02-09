import React,{Component} from "react"
import About from "./routes/About"
import Home from "./routes/Home"
import Navigation from "./routes/Navigation"
import Detail from "./routes/Detail"
import {HashRouter, Route} from "react-router-dom"
import "./App.css"

function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about"  component={About}/>
    <Route path="/movie/" exact={true} component={Detail}/>
    <Route path="/movie/:id"  component={Detail}/>
  </HashRouter>
  )}

export default App;