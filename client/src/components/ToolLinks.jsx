import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import "./styles/ToolLinks.css";

const ToolLinks = () => {
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

    const UnlimitedUsage = () => {
        return <span style={styles.span}>UNLIMITED usage</span>;
    };

    const FreeUltimatePlan = () => {
        return <span style={styles.span}>Free with ULTIMATE Plan</span>;
    };

    const NewTool = () => {
        return <span style={styles.span}>New Tool</span>;
    };

    return (
        <div className="toolLinks" id="toolLinks">
            <div className="title">
                <h1>Access All 45+ Growth Marketing Tools in All Plans</h1>
            </div>
            <div className="links">
                <div className="col1">
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Find Emails <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Search Emails By Domain</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Domain Email Search Extension</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>B2B Lead Search</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Blog Author Finder</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Guest Post Finder</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Quora Question Finder</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Bulk Find Emails</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Bulk Domain Search</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Bulk Blog Author Finder</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Verify Emails <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Phone Number Verify</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Website Technology Checker</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Website Technology Checker Extension</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Bulk Verify Emails</p>
                        </a>
                    </div>
                </div>
                <div className="col2">
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Facebook Group Member Extractor</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Facebook Auto Friend Request Sender</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Facebook Auto Message Sender</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                FB Ad Hidden Interest Finder
                                <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Facebook Group List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                LinkedIn Email Finder <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                LinkedIn Poll Scraper <NewTool />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>LinkedIn Group Member Extractor</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                LinkedIn Group List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Instagram Auto Follow/Unfollow</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Instagram Auto Message Sender</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Instagram Profile Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Instagram Follower Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Instagram Post Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Instagram Hashtag Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>YouTube Channel Scraper</p>
                        </a>
                    </div>
                </div>
                <div className="col3">
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Instagram Hashtag Generator <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Twitter Auto Mass DM Message Sender</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Slack Member Email Extractor</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Slack Group List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>ProductHunt Follower Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>ProductHunt Comment Profile Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Startup Submission List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                YC Startup List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Affiliate Networks List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Guest Blogging Sites List <FreeUltimatePlan />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>WhatsApp Group Member Extractor</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                WhatsApp Auto Message Sender <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Email Extractor Extension <UnlimitedUsage />
                            </p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>TikTok Follower Scraper</p>
                        </a>
                    </div>
                    <div className="link">
                        <a href="">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Yellow Pages Scraper</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToolLinks;
