import React from "react";
import "./styles/ListTools.css";
import list1 from "../images/list1.svg";
import list2 from "../images/list2.svg";
import list3 from "../images/list3.svg";
import list4 from "../images/list4.svg";

const ListTools = () => {
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
        <div className="list">
            <h1 className="title">List Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={list1} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Startup Submission List
                            </h2>
                            <p>
                                Best Places to Submit your Startup to get
                                traffic & backlinks.
                            </p>
                            <UnlimitedUsage text="Free"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={list2} />
                        <div className="toolDesc">
                            <h2 className="toolName">YC Startup List</h2>
                            <p>
                                List of YCombinator Companies along with Contact
                                Details.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={list3} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Affiliate Networks List
                            </h2>
                            <p>List of Affiliate Networks for your business.</p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={list4} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Guest Blogging Oppurtunities List
                            </h2>
                            <p>List of Blogs that are accepting Guest Blogs.</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ListTools;
