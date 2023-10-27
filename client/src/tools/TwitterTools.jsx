import React from "react";
import "./styles/TwitterTools.css";
import twitter1 from "../images/twitter1.svg";
import twitter2 from "../images/twitter2.svg";

const TwitterTools = () => {
  
    return (
        <div className="twitter">
            <h1 className="title">Twitter Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={twitter1} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Twitter Follower Email Finder
                            </h2>
                            <p>
                                Extract All Followers from a profile with
                                Emails.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={twitter2} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Twitter Auto Mass DM Message Sender
                            </h2>
                            <p>
                                Send mass private messages to Twitter profile
                                automatically without getting BANNED.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TwitterTools;
