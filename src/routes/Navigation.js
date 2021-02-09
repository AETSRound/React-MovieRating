import React from 'react'
import {Link} from "react-router-dom"
import "./Navigation.css"

//a href 대신 Link to 를 사용
export default function Navigation() {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
}
