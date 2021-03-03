import React from "react";
import me from '../images/me_small.jpg'

export default class ImageCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <p>Me lol</p>
                </div>
                <div className="card-body">
                    <img src={me} alt="this me lol" className="pagecontent-image"></img>
                </div>
            </div>
        );
    }
}