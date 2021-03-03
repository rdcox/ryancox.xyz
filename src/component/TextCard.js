import React from "react";
import PageLink from './PageLink.js'
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
                    <table className="table-bordered">
                        <tbody>
                            <tr>
                            <td>
                                <PageLink text="Github" link="https://github.com/rdcox"></PageLink>
                            </td>
                            <td>
                                <PageLink text="Resume" link=""></PageLink>
                            </td>
                            <td>
                                <PageLink text="LinkedIn" link="https://www.linkedin.com/in/ryan-cox-81228191/"></PageLink>
                            </td>
                            </tr>
                            <tr>
                            <td>
                                <PageLink text="Kaggle" link="https://www.kaggle.com/ryancox"></PageLink>
                            </td>
                            <td>
                                <PageLink text="Twitter" link="https://twitter.com/BonziBu99067986"></PageLink>
                            </td>
                            <td>
                                <PageLink text="HackerRank" link="https://www.hackerrank.com/rdcox"></PageLink>
                            </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}