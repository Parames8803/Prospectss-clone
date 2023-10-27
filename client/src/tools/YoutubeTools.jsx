import React from "react";
import "./styles/YoutubeTools.css"
import youtube1 from "../images/youtube1.svg"

const YoutubeTools = () => {

    return (
        <div className="youtube">
            <h1 className="title">Youtube Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={youtube1} />
                        <div className="toolDesc">
                            <h2 className="toolName">YouTube Channel Scraper</h2>
                            <p>
                            Easily scrape YouTube channels in bulk.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default YoutubeTools;
