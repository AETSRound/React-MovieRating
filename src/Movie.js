import React from 'react'
import PropTypes from "prop-types"
import "./movies.css"

export default function Movie({id, year, title, summary, poster}) {
    return (
        <div class="movie">
            <h3 class="movie__title">{title}<span class="movie__year">( {year} )</span></h3>
            <img src={poster} alt={title} title={title}></img>
            <p class="movie__summary">{summary}</p>
        </div>
    )
}

Movie.prototype = {
    id:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    year:PropTypes.number.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
}