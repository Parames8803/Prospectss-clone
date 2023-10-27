import React from "react";
import SearchTools from "../tools/SearchTools";
import VerifyTools from "../tools/VerifyTools";
import FacebookTools from "../tools/FacebookTools";
import LinkedinTools from "../tools/LinkedinTools";
import InstagramTools from "../tools/InstagramTools";
import TwitterTools from "../tools/TwitterTools";
import SlackTools from "../tools/SlackTools";
import ProductHuntTools from "../tools/ProductHuntTools";
import ListTools from "../tools/ListTools";
import WhatsappTools from "../tools/WhatsappTools";
import TiktokTools from "../tools/TikTokTools";
import YoutubeTools from "../tools/YoutubeTools";

const Tools = () => {
    const styles = {
        p:{
            fontSize: "35px",
            paddingTop: "40px",
            paddingBottom: "40px",
            textAlign: "center"
        },
        span:{
            color: "#8046d0"
        }
    }
    return (
        <div
            className="tools"
            id="tools">
            <p className="info" style={styles.p}>
                Everything you need to scale up your{" "}
                <span style={styles.span}>Marketing & Sales</span>
            </p>
            <SearchTools />
            <VerifyTools />
            <FacebookTools />
            <LinkedinTools />
            <InstagramTools />
            <TwitterTools />
            <SlackTools />
            <ProductHuntTools />
            <ListTools />
            <WhatsappTools />
            <div
                className="singleTool"
                style={{ display: "flex" }}>
                <TiktokTools />
                <YoutubeTools />
            </div>
        </div>
    );
};

export default Tools;
