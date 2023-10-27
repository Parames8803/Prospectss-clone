import React from "react";
import "./styles/FacebookTools.css"
import facebook1 from "../images/facebook1.svg"
import facebook2 from "../images/facebook2.svg"
import facebook3 from "../images/facebook3.svg"
import facebook4 from "../images/facebook4.svg"
import facebook5 from "../images/facebook5.svg"


const FacebookTools = () => {
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
        <div className="facebook">
            <h1 className="title">Facebook Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={facebook1} />
                        <div className="toolDesc">
                            <h2 className="toolName">Facebook Group Member Extractor</h2>
                            <p>
                            Extract member info & email from Facebook groups.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={facebook2} />
                        <div className="toolDesc">
                            <h2 className="toolName">Facebook Auto Friend Request Sender</h2>
                            <p>
                            Send mass Facebook friend requests automatically in the background.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={facebook3} />
                        <div className="toolDesc">
                            <h2 className="toolName">Facebook Auto Message Sender</h2>
                            <p>
                            Send mass Facebook private messages automatically in the background.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={facebook4} />
                        <div className="toolDesc">
                            <h2 className="toolName">Facebook Ad Hidden Interest Finder</h2>
                            <p>
                            Discover Secret Facebook Hidden Ads Interest to create highly converting ad campaigns.
                            </p>
                            <UnlimitedUsage text="Free"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={facebook5} />
                        <div className="toolDesc">
                            <h2 className="toolName">Facebook Group List</h2>
                            <p>
                            List of Facebook Groups in different niches.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FacebookTools;
