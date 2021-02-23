import React, { Component } from 'react'
import "./Detail.css"

export default class Detail extends Component {
    componentDidMount(){
        const {location,history} = this.props;
        console.log(location);
        if(location.state === undefined){
            history.push("/");
        }
    }
    render() {
        const {location} = this.props;
        if(location.state){
            return (
                <div>
                    <div className="moive_container">
                        <div className="img_container">
                            <img className="movie_image" src={location.state.poster}></img>
                        </div>
                        <div className="movie_head">
                            <span className="movie_title">
                                {location.state.title}
                            </span>
                            <span className="movie_year">
                                ({location.state.year})
                            </span>
                        </div>
                        <div className="movie_summary">
                            {location.state.summary}
                        </div>
                    </div>
                </div>
            )
        }else{
            return null;
        }
        
    }
}
