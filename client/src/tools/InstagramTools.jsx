import React from "react";
import "./styles/InstagramTools.css";
import insta1 from "../images/insta1.svg";
import insta2 from "../images/insta2.svg";
import insta3 from "../images/insta3.svg";
import insta4 from "../images/insta4.svg";
import insta5 from "../images/insta5.svg";
import insta6 from "../images/insta6.svg";
import insta7 from "../images/insta7.svg";

const InstagramTools = () => {
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
        <div className="instagram">
            <h1 className="title">Instagram Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={insta1} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Instagram Auto Follow/Unfollow
                            </h2>
                            <p>
                                Grow your Instagram followers organically with
                                Auto Follow/Unfollow Technique.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={insta2} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Instagram Auto Message Sender
                            </h2>
                            <p>
                                Send mass private messages to Instagram profiles
                                automatically without getting BANNED.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={insta3} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Instagram Profile Scraper
                            </h2>
                            <p>
                                Extract profile data & emails of Instagram
                                Users.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={insta4} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Instagram Follower Scraper
                            </h2>
                            <p>
                                Scrape Instagram followers of any public
                                profile/pages.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={insta5} />
                        <div className="toolDesc">
                            <h2 className="toolName">Instagram Post Scraper</h2>
                            <p>
                                Scrape Likes & Comments of the Instagram Post.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={insta6} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Instagram Hashtag Scraper
                            </h2>
                            <p>
                                Scrape All Posts for a specific Hashtag on
                                Instagram.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={insta7} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Instagram Hashtag Generator
                            </h2>
                            <p>
                                Find the top 30 trending hashtags of any keyword
                                on Instagram.
                            </p>
                            <UnlimitedUsage text="Unlimited on Paid Plans"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default InstagramTools;
