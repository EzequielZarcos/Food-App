import React from "react"
import { Link } from "react-router-dom";
import video from "./video.mp4"
import "./LandingPage.css"

export default function LandingPage(){
    return(
        <div className="div-landing">
            <video muted autoPlay loop src={video} className="video"></video>
            <h1 className="h1-landing">Discover Recipes From Around The World</h1>
            <Link to="/home">
            <button className="btn-landing">
                <span>GO</span>
            </button>
            </Link>
        </div>
    )
};