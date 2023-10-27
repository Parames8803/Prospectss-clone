import React from "react";
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
import "./styles/Modal.css";

const Modal = ({ isVisible, onMouseEnter, onMouseLeave }) => {
    const modalStyle = {
        display: isVisible ? "block" : "none",
    };

    return (
        <div
            className="modal"
            style={modalStyle}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            <div className="content">
                <div className="col1">
                    <p>
                        <div className="tools">
                            <HiSearchCircle />
                            <div className="title">Search Tools</div>
                        </div>
                    </p>
                    <p>
                        <a href="/find-emails">Find Emails</a>
                    </p>
                    <p>
                        <a href="/search-email-by-domain">Search Emails By Domain</a>
                    </p>
                    <p>
                        <a href="/b2b-lead-search/">B2B Leads Search</a>
                    </p>
                    <p>
                        <a href="/blog-author-finder/">Blog Author Finder</a>
                    </p>
                    <p>
                        <a href="/quora-question-finder/">Quora Question Finder</a>
                    </p>
                    <p>
                        <a href="/yellow-pages-scraper/">Yellow Pages Scraper</a>
                    </p>
                    <p>
                        <a href="/email-extractor-extension/">Email Extracter Extension</a>
                    </p>
                    <p>
                        <a href="/guest-post">Guest Post Finder</a>
                    </p>
                    <p>
                        <a href="/domain-email-search">Domain Email Search Extension</a>
                    </p>
                    <p>
                        <a href="/bulk-blog-author/">Bulk Blog Author Finder</a>
                    </p>
                    <p>
                        <a href="/bulk-find-email/">Bulk Find Emails</a>
                    </p>
                    <p>
                        <a href="/bulk-domain-search/">Bulk Domain Search</a>
                    </p>
                </div>
                <div className="col2">
                    <p>
                        <div className="tools">
                            <TiTick />
                            <div className="title">Verify Tools</div>
                        </div>
                    </p>
                    <p>
                        <a href="/verify-emails/">Verify Emails</a>
                    </p>
                    <p>
                        <a href="/website-technology-checker/">Website Technology Checker</a>
                    </p>
                    <p>
                        <a href="/phone-number-verify/">Phone Number Verify</a>
                    </p>
                    <p>
                        <a href="/bulk-verify-email/">Bulk Verify Emails</a>
                    </p>
                    <p>
                        <a href="/website-technology-extension/">Website Technology Checker Extension</a>
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
                        <a href="/startup-submission/">Startup Submission list</a>
                    </p>
                    <p>
                        <a href="/guest-blogging/">Guest Blogging Opportunities list</a>
                    </p>
                    <p>
                        <a href="/yc-startup-list/">YC Startup list</a>
                    </p>
                    <p>
                        <a href="/affiliate-network-list">Affiliate Network list</a>
                    </p>
                </div>
                <div className="col3">
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
                        <a href="/fb-group-member-extractor/">Facebook Group Member Extractor</a>
                    </p>
                    <p>
                        <a href="/facebook-auto-friend-request-sender/">Facebook Auto Friend Request Sender</a>
                    </p>
                    <p>
                        <a href="/facebook-auto-message-sender/">Facebook Auto Message Sender</a>
                    </p>
                    <p>
                        <a href="/facebook-ad-hidden-interest-finder/">Facebook Ad Hidden Interest Finder</a>
                    </p>
                    <p>
                        <a href="/facebook-group-list/">Facebook Group List</a>
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
                        <a href="/producthunt-follower-scraper/">ProductHunt Follower Scraper</a>
                    </p>
                    <p>
                        <a href="/producthunt-comment-profile-scraper/">ProductHunt Comment Profile Scraper</a>
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
                        <a href="/twitter-follower-email-finder/">Twitter Follower Email Finder</a>
                    </p>
                    <p>
                        <a href="/twitter-auto-mass-dm-message-sender/">Twitter Auto Mass DM Message Sender</a>
                    </p>
                </div>
                <div className="col4">
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
                        <a href="/linkedin-email-finder/">LinkedIn Email Finder</a>
                    </p>
                    <p>
                        <a href="/linkedin-group-member-extractor/">LinkedIn Group Member Extractor</a>
                    </p>
                    <p>
                        <a href="/linkedin-poll-extractor/">LinkedIn Poll Scraper</a>
                    </p>
                    <p>
                        <a href="/linkedin-group-list/">LinkedIn Group List</a>
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
                        <a href="/slack-member-email-extractor/">Slack Member Email Extractor</a>
                    </p>
                    <p>
                        <a href="/slack-group-list/">Slack Group List</a>
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
                        <a href="/scrape-tiktok-followers/">TikTok Follower Scraper</a>
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
                        <a href="/youtube-channel-scraper/">YouTube Channel Scraper</a>
                    </p>
                </div>
                <div className="col5">
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
                        <a href="/instagram-auto-message-sender/">Instagram Auto Message Sender</a>
                    </p>
                    <p>
                        <a href="/instagram-profile-scraper/">Instagram Profile Scraper</a>
                    </p>
                    <p>
                        <a href="/instagram-auto-follow-unfollow-tool/">Instagram Auto Follow/Unfollow</a>
                    </p>
                    <p>
                        <a href="/instagram-post-scraper/">Instagram Post Like Comment Scraper</a>
                    </p>
                    <p>
                        <a href="/instagram-follower-scraper/">Instagram Follower Scraper</a>
                    </p>
                    <p>
                        <a href="/instagram-hashtag-scraper/">Instagram Hashtag Scraper</a>
                    </p>
                    <p>
                        <a href="/instagram-hashtag-generator/">Instagram Hashtag Generator</a>
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
                        <a href="/whatsapp-group-scraper/">Whatsapp Group Member Extractor</a>
                    </p>
                    <p>
                        <a href="/whatsapp-auto-message-sender/">Whatsapp Auto Message Sender</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
