import React from "react";
import AffiliateNetworkimg from "../../images/AffiliateNetworks.jpeg";
import './styles/Component.css'

const AffiliateNetwork = () => {

    return (
        <div className="toolsBlog">
            <h1 className="title">Affiliate Network List</h1>
            <p className="desc">
                Get listed on 40+ Top Affiliate Networks with highest conversion
                rates. Choose the perfect affiliate network for your business
                that suits you perfectly. Compare Pricing & the number of active
                Affiliates to find the best affiliate network for your business.
            </p>
            <div className="keywords">
                <p className="keyword">Affiliate Networks</p>
                <p className="keyword">Affiliate Networks List</p>
                <p className="keyword">Affiliate Marketing Websites</p>
                <p className="keyword">Affiliate Lists</p>
                <p className="keyword">Affiliate Marketing Networks</p>
            </div>
            <h2 className="creditsPerMonth">2500 credits for $49/per month</h2>
            <p className="trusted">Trusted by 94619+ Marketing Professional</p>
            <button className="claimAccount">Claim My Free Account</button>
            <p className="cardRequire">No Credit Card Required</p>
            <h1 className="about">
                Build an Army of Affiliates to bring in new Business using Top
                Affiliate Networks in your Niche & Region.
            </h1>
            <div className="features">
                <p>You will be able to get the following Data points.</p>
                <p className="list">
                    <span className="arricon">{">"}</span> Affiliate Website
                    Name
                </p>
                <p className="list">
                    <span className="arricon">{">"}</span> Website URL
                </p>
                <p className="list">
                    <span className="arricon">{">"}</span> Merchant Pricing
                </p>
                <p className="list">
                    <span className="arricon">{">"}</span> Number of Affiliates
                </p>
            </div>
            <div className="credits">
                <p>
                    <b>0.5 Credits</b> charged per Affiliate Network Unlock.
                    COMPLETE LIST IS FREE WITH ULTIMATE PLAN.
                </p>
            </div>
            <div className="example">
                <p>
                    With this list, you can partner with the affiliate program
                    that suits your business. If you are an affiliate marketer
                    or a brand that wants to sell its products, you can use this
                    list to find out the top networks for affiliate marketing.
                </p>
            </div>
            <img src={AffiliateNetworkimg} />
        </div>
    );
};

export default AffiliateNetwork;
