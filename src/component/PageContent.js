import React from "react";
import "./PageContent.css";
import me from '../images/me_small.jpg'

export default class PageContent extends React.Component {
    render() {
        return (
            <div className="component-pagecontent">
                <div className="pagecontent-imagecontainer">
                    <img src={me} alt="this me lol" className="pagecontent-image"></img>
                </div>
                <div>
                    <p className="pagecontent-text">
                        Hello! I am a software engineer based in Boston, MA with a professional background in automated testing, full-stack development, and CI & CD devops.
                    </p>
                </div>
            </div>
        );
    }
}