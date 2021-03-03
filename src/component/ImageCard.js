import React from "react";
import './ImageCard.css'
import me from '../images/me_small.jpg';

export default class ImageCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    Me lol
                    <button type="button" className="btn" aria-label="Close"><span>x</span></button>
                </div>
                <div className="card-body">
                    <img src={me} alt="this me lol"></img>
                </div>
            </div>
        );
    }
}