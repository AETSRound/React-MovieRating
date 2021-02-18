import React from 'react'
import {Link} from "react-router-dom"
import "./Navigation.css"

//a href 대신 Link to 를 사용
export default function Navigation() {
    return (
        <div className="nav">
            <Link to="/" className="btn--stripe">Home</Link>
            <Link to="/about" className="btn--stripe">About</Link>
        </div>
    )
}
