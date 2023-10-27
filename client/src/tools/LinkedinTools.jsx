import React from "react";
import linkedin1 from "../images/linkedin1.svg";
import linkedin2 from "../images/linkedin2.svg";
import linkedin3 from "../images/linkedin3.svg";
import linkedin4 from "../images/linkedin4.svg";
import linkedin5 from "../images/linkedin5.svg";
import linkedin6 from "../images/linkedin6.svg";
import linkedin7 from "../images/linkedin7.svg";
import './styles/LinkedinTools.css'


const LinkedinTools = () => {
    const styles = {
        span: {
            background:
                "linear-gradient(to top right, #0099ff 0%, #ff0066 100%)",
            borderRadius: "50px",
            padding: "5px",
            marginLeft: "5px",
            color: "white",
            fontSize: "10px",
        },
    };

    const UnlimitedUsage = (props) => {
        return <span style={styles.span}>{props.text}</span>;
    };

    return (
        <div className="linkedin">
            <h1 className="title">Linkedin Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin1} />
                        <div className="toolDesc">
                            <h2 className="toolName">LinkedIn Email Finder</h2>
                            <p>
                            Extension to help you find emails from LinkedIn Profiles.
                            </p>
                            <UnlimitedUsage text="Unlimited on Paid Plans"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin2} />
                        <div className="toolDesc">
                            <h2 className="toolName">LinkedIn Group Member Extractor</h2>
                            <p>
                            Extract Member info & email from LinkedIn groups.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin3} />
                        <div className="toolDesc">
                            <h2 className="toolName">LinkedIn Poll Scraper</h2>
                            <p>
                            Unlock LinkedIn Poll Potential: Extract Profiles & Verified Emails for Targeted Outreach.
                            </p>
                            <UnlimitedUsage text="New Tool"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin4} />
                        <div className="toolDesc">
                            <h2 className="toolName">LinkedIn Group List</h2>
                            <p>
                            List of LinkedIn Groups in different niches
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin5} />
                        <div className="toolDesc">
                            <h2 className="toolName">Bulk LinkedIn Profile Scraper</h2>
                            <p>
                            Get all the details for any LinkedIn Profiles.
                            </p>
                            <UnlimitedUsage text="Releasing Soon ⚡"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin6} />
                        <div className="toolDesc">
                            <h2 className="toolName">LI Sales Navigator Search Scraper</h2>
                            <p>
                            Scrape Sales Navigator search results with profile emails.
                            </p>
                            <UnlimitedUsage text="Releasing Soon ⚡"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={linkedin7} />
                        <div className="toolDesc">
                            <h2 className="toolName">LinkedIn Auto Message Sender</h2>
                            <p>
                            Send Linkedin private messages automatically in the background without getting BANNED.
                            </p>
                            <UnlimitedUsage text="Releasing Soon ⚡"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LinkedinTools;
