import React from "react";

import "./PageLink.css";

export default class PageLink extends React.Component {
    render() {
        return(
            <div class="component-pagelink">
                <a
                    href={this.props.link}>
                    {this.props.text}
                </a>
            </div>
        );
    }
}