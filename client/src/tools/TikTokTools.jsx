import React from "react";
import "./styles/TikTokTools.css";
import tiktok1 from "../images/tiktok1.svg"

const TikTokTools = () => {
    
    return (
        <div className="tiktok">
            <h1 className="title">Tiktok Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={tiktok1} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                            TikTok Follower Scraper
                            </h2>
                            <p>
                            Scrape TikTok followers of any public profile or pages.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TikTokTools;
