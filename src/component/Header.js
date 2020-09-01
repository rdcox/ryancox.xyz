import React from "react";

import "./Header.css";

export default class Header extends React.Component {

    render() {
        return (
            <div className="component-header">
                <header>
                    {this.props.text}
                </header>
            </div>
        );
    }
}
