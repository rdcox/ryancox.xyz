import React from "react";
import "./PageContent.css";
import ImageCard from './ImageCard'
import TextCard from "./TextCard";

export default class PageContent extends React.Component {
    render() {
        return (
            <div className="component-pagecontent">
                <ImageCard></ImageCard>
                <TextCard></TextCard>
            </div>
        );
    }
}