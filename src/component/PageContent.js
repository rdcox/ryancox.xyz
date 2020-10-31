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
                        Hello! I am a software engineer based in Boston, MA with a professional background in automated testing, full-stack development, and CI & CD devops. In 2018, I received my B.S. degree in Mathematics with concentrations in Applied Mathematics and Statistics from the University of Massachusetts Amherst, having also completed two software development internships during my time there. Since graduating from UMass in May of 2018, I have been working as a Software Engineer in Test at AIR Worldwide, primarily developing applications, frameworks, and CI & CD pipelines using C#, SpecFlow, Angular, TSQL, Python, Docker, and Azure DevOps to support a variety of our risk management software products, most notably Touchstone, TouchstoneRe, and ARC.
                    </p>
                </div>
            </div>
        );
    }
}