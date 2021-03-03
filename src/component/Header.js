import React from "react";

import "./Header.css";

export default class Header extends React.Component {

    render() {
        return (
            <div className="component-header wordart purple">
                <span className="text">
                    {this.props.text}
                </span>
            </div>
        );
    }
}
