import React from "react";

export default class TextCard extends React.Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">
                    About me
                    <button type="button" className="btn" aria-label="Close"><span>x</span></button>
                </div>
                <div className="card-body">
                    <p>
                        Hello! I am a software engineer based in Boston, MA with a professional background in automated testing, full-stack development, and CI & CD devops.
                    </p>
                </div>
            </div>
        );
    }
}