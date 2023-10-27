import React from "react";
import "./styles/ProductHuntTools.css";
import product1 from "../images/product1.svg";
import product2 from "../images/product2.svg";

const ProductHuntTools = () => {

    return (
        <div className="product">
            <h1 className="title">ProductHunt Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={product1} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                ProductHunt Follower Scraper
                            </h2>
                            <p>
                                Extract All profile data with Emails of
                                ProductHunt user's followers & followings.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={product2} />
                        <div className="toolDesc">
                            <h2 className="toolName">
                                ProductHunt Comment Profile Scraper
                            </h2>
                            <p>
                                Extract ProductHunt Product Page Commenters Data
                                with Emails.
                            </p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductHuntTools;
