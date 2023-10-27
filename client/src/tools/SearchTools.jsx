import React from "react";
import findEmail from "../images/findEmail.svg";
import B2BLeads from "../images/B2BLeads.svg";
import BlogAuthor from "../images/BlogAuthor.svg";
import BulkAuthor from "../images/BulkAuthor.svg";
import BulkEmails from "../images/BulkEmails.svg";
import domainEmail from "../images/domainEmail.svg";
import Emailextraction from "../images/Emailextraction.svg";
import GuestPost from "../images/GuestPost.svg";
import QuoraQuestion from "../images/QuoraQuestion.svg";
import YellowPage from "../images/YeelowPage.svg";
import "./styles/SearchTools.css";

const SearchTools = () => {
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
        <div className="search">
            <h1 className="title">Search Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={findEmail} />
                        <div className="toolDesc">
                            <h2 className="toolName">Find Emails</h2>
                            <p>
                                Find email of people using name & company domain
                            </p>
                            <UnlimitedUsage text="Unlimited on Paid Plans"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={domainEmail} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Search Emails By Domain
                            </h2>
                            <p>
                                Find all personal and generic emails for any
                                domain.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={domainEmail} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Domain Email Search Extension
                            </h2>
                            <p>
                                Extension to find all personal and generic
                                emails for any domain.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={YellowPage} />
                        <div className="toolDesc">
                            <h2 className="toolName">Yellow Pages Scraper</h2>
                            <p>
                                Scrape listed business data from US YellowPages
                                with emails.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={QuoraQuestion} />
                        <div className="toolDesc">
                            <h2 className="toolName">Quora Question Finder</h2>
                            <p>
                                Get all relevant Quora posts around your topic.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={GuestPost} />
                        <div className="toolDesc">
                            <h2 className="toolName">Guest Post Finder</h2>
                            <p>
                                Get all the websites which accept guest blogs in
                                your niche.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={Emailextraction} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Email Extractor Extension
                            </h2>
                            <p>
                                Scrape all the Emails & Phone numbers on any
                                webpage.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={BulkEmails} />
                        <div className="toolDesc">
                            <h2 className="toolName">Bulk Domain Search</h2>
                            <p>
                                Find email of people using name & company domain
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={BulkAuthor} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Bulk Blog Author Finder
                            </h2>
                            <p>
                                Verify Emails & Find Emails in Bulk with manual
                                & CSV uploads.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={BlogAuthor} />
                        <div className="toolDesc">
                            <h2 className="toolName">Blog Author Finder</h2>
                            <p>
                                Feed the blog article URL and get the author who
                                has written it along with his email.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={B2BLeads} />
                        <div className="toolDesc">
                            <h2 className="toolName">B2B Lead Search</h2>
                            <p>
                                Get Business with their emails for easy cold
                                email outreach.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={BulkEmails} />
                        <div className="toolDesc">
                            <h2 className="toolName">Bulk Find Emails</h2>
                            <p>
                                Verify Emails & Find Emails in Bulk with manual
                                & CSV uploads.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SearchTools;
