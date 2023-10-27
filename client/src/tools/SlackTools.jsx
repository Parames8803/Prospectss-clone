import React from "react";
import "./styles/SlackTools.css";
import slack from "../images/slack.svg"
import slack1 from "../images/slack1.svg"


const SlackTools = () => {
    
    return (
        <div className="slack">
            <h1 className="title">Slack Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={slack} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                            Slack Member Email Extractor
                            </h2>
                            <p>
                            Extract All members of a Slack with their Email, Skype, & Phone number.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={slack1} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                            Slack Group List
                            </h2>
                            <p>
                            Find Slack Groups to promote your business or connect with communities in your niche.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SlackTools;
