import React, { useState } from "react";
import "./styles/Pricing.css";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { PiXCircleFill } from "react-icons/pi";

const Pricing = () => {
    const [standardPlan, setStandardPlan] = useState(true);
    const [highTierPlan, setHighTierPlan] = useState(false);
    const [unlimitedPlan, setUnlimitedPlan] = useState(false);

    const StandardPlan = () => {
        return (
            <div className="plans">
                <div className="container">
                    <div className="title">
                        <h3>BASIC</h3>
                    </div>
                    <div className="money">
                        <h2>$49</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>2500</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Basic Live Chat & Email Support</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to 45+ Tools</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to Expert Growth Hacks</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to All Training Material</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>No Team Members</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>API Access</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>1 Hour Demo/Training</p>
                        </div>
                    </div>
                    <div className="getPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <h3>STANDARD</h3>
                    </div>
                    <div className="money">
                        <h2>$99</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>10000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Basic Live Chat & Email Support</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to 45+ Tools</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to Expert Growth Hacks</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to All Training Material</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>3 Team Members</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>API Access</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>1 Hour Demo/Training</p>
                        </div>
                    </div>
                    <div className="getPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <h3>PREMIUM</h3>
                    </div>
                    <div className="money">
                        <h2>$139</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>15000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                <b>24/7</b> Live Chat & <b>Premium</b> Email
                                Support
                            </p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to 45+ Tools</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to Expert Growth Hacks</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to All Training Material</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>5 Team Members</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>API Access</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>1 Hour Demo/Training</p>
                        </div>
                    </div>
                    <div className="getPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
                <div className="unlimitedContainer">
                    <div className="title">
                        <h3>UNLIMITED</h3>
                    </div>
                    <div className="money">
                        <h2>$249</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>30000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                <b>24/7</b> Live Chat & <b>Premium</b> Email
                                Support
                            </p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to 45+ Tools</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to Expert Growth Hacks</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Access to All Training Material</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>10 Team Members</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>API Access</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>1 Hour Demo/Training</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>
                                Free Startup Submission List + Guest Blogging
                                <br />
                                Sites List + Affiliate Networks List + YC
                                Startup
                                <br />
                                List + Facebook, Linkedin, Slack Group List
                            </p>
                        </div>
                    </div>
                    <div className="unGetPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
            </div>
        );
    };

    const HighTierPlan = () => {
        return (
            <div className="plans1">
                <div className="container">
                    <div className="title">
                        <h3>STARTUP</h3>
                    </div>
                    <div className="money">
                        <h2>$399</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>50000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Everything from Ultimate Plan</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>25 Team Members</p>
                        </div>
                    </div>
                    <div className="getPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <h3>BUSINESS</h3>
                    </div>
                    <div className="money">
                        <h2>$599</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>80000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Everything from Ultimate Plan</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>25 Team Members</p>
                        </div>
                    </div>
                    <div className="getPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
                <div className="container">
                    <div className="title">
                        <h3>AGENCY</h3>
                    </div>
                    <div className="money">
                        <h2>$999</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>140000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Everything from Ultimate Plan</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>25 Team Members</p>
                        </div>
                    </div>
                    <div className="getPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
                <div className="unlimitedContainer">
                    <div className="title">
                        <h3>ENTERPRISE</h3>
                    </div>
                    <div className="money">
                        <h2>$1699</h2>
                        <p>/Month</p>
                    </div>
                    <div className="credits">
                        <h1>1250000</h1>
                        <p>CREDITS</p>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Everything from Ultimate Plan</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>25 Team Members</p>
                        </div>
                    </div>
                    <div className="unGetPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
            </div>
        );
    };

    const UnlimitedPlan = () => {
        return (
            <div className="plans2">
                <div className="limited">
                    <h2>⚡ Limited Time Offer 50% OFF Lifetime</h2>
                </div>
                <div className="unlimitedContainer">
                    <div className="title">
                        <h3>OUTREACH</h3>
                    </div>
                    <div className="money">
                        <h2>
                            $198<span>/Month</span>
                        </h2>
                        <h2 className="discount">
                            $99<span>/Month</span>
                        </h2>
                    </div>
                    <div className="access">
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Facebook Auto Message Sender</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Twitter Auto Message Sender</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Instagram Auto Message Sender</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited WhatsApp Auto Message Sender</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Instagram Auto Follow/Unfollow</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited FB Auto Friend Request Sender</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Single Email Verify</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Single Find Email</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited Instagram Hashtag Generator</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited FB Ads Hidden Interest Finder</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>Unlimited LinkedIn Auto Message Sender</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>3 Team Members</p>
                        </div>
                        <div className="link">
                            <p className="iconTick">
                                <RiCheckboxCircleFill />
                            </p>
                            <p>300 credits</p>
                        </div>
                        <div className="link">
                            <p className="iconX">
                                <PiXCircleFill />
                            </p>
                            <p>API Access</p>
                        </div>
                    </div>
                    <div className="unGetPlan">
                        <button>Get Plan</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="pricing" id="pricing"> 
            <div className="intro">
                <h1>10x your Growth, Lead Generation, Outreach</h1>
                <h1>& More</h1>
            </div>
            <div className="desc">
                <p>
                    The most affordable plans with{" "}
                    <b>Premium Tools to advance your marketing efforts.</b>
                </p>
            </div>
            <div className="pricingBtns">
                <button
                    onClick={() => {
                        setStandardPlan(true);
                        setHighTierPlan(false);
                        setUnlimitedPlan(false);
                    }}>
                    Standard Plans
                </button>
                <button
                    onClick={() => {
                        setStandardPlan(false);
                        setHighTierPlan(true);
                        setUnlimitedPlan(false);
                    }}>
                    High Tier Plans
                </button>
                <button
                    onClick={() => {
                        setStandardPlan(false);
                        setHighTierPlan(false);
                        setUnlimitedPlan(true);
                    }}>
                    ⚡Unlimited Plans
                </button>
            </div>
            <div className="plansContainer">
                {standardPlan && <StandardPlan />}
                {highTierPlan && <HighTierPlan />}
                {unlimitedPlan && <UnlimitedPlan />}
            </div>
            <div className="wantCredits">
                <h1>
                    Want more credits? <span>Contact for Volume Discount.</span>
                </h1>
                <button>Contact</button>
            </div>
        </div>
    );
};

export default Pricing;
