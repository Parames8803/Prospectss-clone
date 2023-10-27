import React from "react";
import "./styles/VerifyTools.css";
import VerifyEmails from "../images/Verify-Emails.svg";
import PhoneVerify from "../images/PhoneVerify.svg";
import WebsiteChecker from "../images/WebsiteChecker.svg";
import WebsiteExtension from "../images/WebsiteExtension.svg";
import bulkPhone from "../images/bulk-phone.png";
import bulkEmail from "../images/Bulk-Verify-Emails.svg";

const VerifyTools = () => {
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
        <div className="verify">
            <h1 className="title">Verify Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={VerifyEmails} />
                        <div className="toolDesc">
                            <h2 className="toolName">Verify Emails</h2>
                            <p>
                                Check if email, exists, is deliverable, is the
                                email inbox full etc.
                            </p>
                            <UnlimitedUsage text="Unlimited on Paid Plans"/>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={PhoneVerify} />
                        <div className="toolDesc">
                            <h2 className="toolName">Phone Number Verify</h2>
                            <p>
                                Find email of people using name & company domain
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={WebsiteChecker} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Website Technology Checker
                            </h2>
                            <p>
                                Find, Uncover & check the technology that runs
                                on the website with their Emails.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={WebsiteExtension} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Website Technology Checker Extension
                            </h2>
                            <p>
                                Find, Uncover & check the technology that runs
                                on the website with their Emails.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={bulkPhone} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                Bulk Phone Number Verify
                            </h2>
                            <p>Verify & Validate Phone Numbers in Bulk</p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={bulkEmail} />
                        <div className="toolDesc">
                            <h2 className="toolName">Bulk Verify Emails</h2>
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

export default VerifyTools;
