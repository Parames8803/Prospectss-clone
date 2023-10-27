import React from "react";
import logo from "../images/Prospectss-logo.svg";
import { HiSearchCircle } from "react-icons/hi";
import { TiTick } from "react-icons/ti";
import { RiFileListFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { BsFillPCircleFill } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { SiSlack } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";
import youtube from "../images/youtube.png";
import instagram from "../images/instagram.png";
import "./styles/Footer.css";


const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="content">
                <dvi className="col1">
                    <img
                        src={logo}
                        className="logo"
                    />
                    <p className="intro">
                        #1 Growth Marketing Toolkit for Emails, Leads, Data &
                        Outreach.
                    </p>
                    <div className="social">
                        <img src={facebook} />
                        <img src={twitter} />
                        <img src={linkedin} />
                        <img src={youtube} />
                        <img src={instagram} />
                    </div>
                    <p>
                        <a href="#">Home</a>
                    </p>
                    <p>
                        <a href="#">Tools</a>
                    </p>
                    <p>
                        <a href="#">Pricing</a>
                    </p>
                    <p>
                        <a href="#">Login</a>
                    </p>
                    <p>
                        <a href="#">Signup</a>
                    </p>
                    <p>
                        <a href="#">Live Support</a>
                    </p>
                    <p>
                        <a href="#">Knowledgebase</a>
                    </p>
                    <p>
                        <a href="#">Tool Status</a>
                    </p>
                    <p>
                        <a href="#">Roadmap</a>
                    </p>
                    <p>
                        <a href="#">Changelog</a>
                    </p>
                    <p>
                        <a href="#">Feature Request</a>
                    </p>
                    <p>
                        <a href="#">Growth Hack Lists</a>
                    </p>
                    <p>
                        <a href="#">Contact us</a>
                    </p>
                    <p>
                        <a href="#">Blog</a>
                    </p>
                    <p>
                        <a href="#">Affiliate Program</a>
                    </p>
                    <p>
                        <a href="#">Press Kit</a>
                    </p>
                </dvi>
                <div className="col2">
                    <p>
                        <div className="tools">
                            <HiSearchCircle />
                            <div className="title">Search Tools</div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Find Emails</a>
                    </p>
                    <p>
                        <a href="#">Search Emails By Domain</a>
                    </p>
                    <p>
                        <a href="#">B2B Leads Search</a>
                    </p>
                    <p>
                        <a href="#">Blog Author Finder</a>
                    </p>
                    <p>
                        <a href="#">Quora Question Finder</a>
                    </p>
                    <p>
                        <a href="#">Yellow Pages Scraper</a>
                    </p>
                    <p>
                        <a href="#">Email Extracter Extension</a>
                    </p>
                    <p>
                        <a href="#">Guest Post Finder</a>
                    </p>
                    <p>
                        <a href="#">Domain Email Search Extension</a>
                    </p>
                    <p>
                        <a href="#">Bulk Blog Author Finder</a>
                    </p>
                    <p>
                        <a href="#">Bulk Find Emails</a>
                    </p>
                    <p>
                        <a href="#">Bulk Domain Search</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ paddingTop: "10px", color: "green" }}>
                            <IoLogoWhatsapp />
                            <div
                                className="title"
                                style={{ color: "green" }}>
                                Whatsapp Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Whatsapp Group Member Extractor</a>
                    </p>
                    <p>
                        <a href="#">Whatsapp Auto Message Sender</a>
                    </p>
                </div>
                <div className="col3">
                    <p>
                        <div className="tools">
                            <TiTick />
                            <div className="title">Verify Tools</div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Verify Emails</a>
                    </p>
                    <p>
                        <a href="#">Website Technology Checker</a>
                    </p>
                    <p>
                        <a href="#">Phone Number Verify</a>
                    </p>
                    <p>
                        <a href="#">Bulk Verify Emails</a>
                    </p>
                    <p>
                        <a href="#">Website Technology Checker Extension</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ paddingTop: "10px", color: "orangered" }}>
                            <BsFillPCircleFill />
                            <div
                                className="title"
                                style={{ color: "orangered" }}>
                                ProductHunt Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">ProductHunt Follower Scraper</a>
                    </p>
                    <p>
                        <a href="#">ProductHunt Comment Profile Scraper</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ paddingTop: "10px", color: "crimson" }}>
                            <SiSlack />
                            <div
                                className="title"
                                style={{ color: "crimson" }}>
                                Slack Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Slack Member Email Extractor</a>
                    </p>
                    <p>
                        <a href="#">Slack Group List</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ paddingTop: "10px", color: "red" }}>
                            <BsYoutube />
                            <div
                                className="title"
                                style={{ color: "red" }}>
                                Youtube Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">YouTube Channel Scraper</a>
                    </p>
                </div>
                <div className="col4">
                    <p>
                        <div
                            className="tools"
                            style={{ color: "darkblue" }}>
                            <BsFacebook />
                            <div
                                className="title"
                                style={{ color: "darkblue" }}>
                                Facebook Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Facebook Group Member Extractor</a>
                    </p>
                    <p>
                        <a href="#">Facebook Auto Friend Request Sender</a>
                    </p>
                    <p>
                        <a href="#">Facebook Auto Message Sender</a>
                    </p>
                    <p>
                        <a href="#">Facebook Ad Hidden Interest Finder</a>
                    </p>
                    <p>
                        <a href="#">Facebook Group List</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ color: "crimson" }}>
                            <FaInstagramSquare />
                            <div
                                className="title"
                                style={{ color: "crimson" }}>
                                Instagram Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Instagram Auto Message Sender</a>
                    </p>
                    <p>
                        <a href="#">Instagram Profile Scraper</a>
                    </p>
                    <p>
                        <a href="#">Instagram Auto Follow/Unfollow</a>
                    </p>
                    <p>
                        <a href="#">Instagram Post Like Comment Scraper</a>
                    </p>
                    <p>
                        <a href="#">Instagram Follower Scraper</a>
                    </p>
                    <p>
                        <a href="#">Instagram Hashtag Scraper</a>
                    </p>
                    <p>
                        <a href="#">Instagram Hashtag Generator</a>
                    </p>
                </div>
                <div className="col5">
                    <p>
                        <div
                            className="tools"
                            style={{ color: "darkblue" }}>
                            <ImLinkedin />
                            <div
                                className="title"
                                style={{ color: "darkblue" }}>
                                Linkedin Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">LinkedIn Email Finder</a>
                    </p>
                    <p>
                        <a href="#">LinkedIn Group Member Extractor</a>
                    </p>
                    <p>
                        <a href="#">LinkedIn Poll Scraper</a>
                    </p>
                    <p>
                        <a href="#">LinkedIn Group List</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ color: "rgb(0, 117, 185)" }}>
                            <AiFillTwitterCircle />
                            <div
                                className="title"
                                style={{ color: "rgb(0, 117, 185)" }}>
                                Twitter Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Twitter Follower Email Finder</a>
                    </p>
                    <p>
                        <a href="#">Twitter Auto Mass DM Message Sender</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ paddingTop: "10px", color: "darkblue" }}>
                            <RiFileListFill />
                            <div
                                className="title"
                                style={{ color: "darkblue" }}>
                                List Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">Startup Submission list</a>
                    </p>
                    <p>
                        <a href="#">Guest Blogging Opportunities list</a>
                    </p>
                    <p>
                        <a href="#">YC Startup list</a>
                    </p>
                    <p>
                        <a href="#">Affiliate Network list</a>
                    </p>
                    <p>
                        <div
                            className="tools"
                            style={{ paddingTop: "10px", color: "skyblue" }}>
                            <FaTiktok />
                            <div
                                className="title"
                                style={{ color: "skyblue" }}>
                                TikTok Tools
                            </div>
                        </div>
                    </p>
                    <p>
                        <a href="#">TikTok Follower Scraper</a>
                    </p>
                </div>
            </div>
            <div className="copyrights">
                <p className="copy">
                    Copyright © 2023 Prospectss. All Rights Reserved
                </p>
                <p className="detail">
                    All product names, logos, and brands are property of their
                    respective owners. All company, product and service names
                    used in this website are for identification purposes only.
                    <br />
                    Use of these names, logos, and brands does not imply
                    endorsement. These tools are not official products of any
                    social media platform. Please use at your own risk.
                </p>
                <p className="terms">
                    <a href="">Terms & Condition </a>| 
                    <a href=""> Privacy Policy</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
