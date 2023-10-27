import React from "react";
import growthHacks from "../images/growthHacks.jpg";
import toolTutorial from "../images/visitTutorial.png";
import ytTutorial from "../images/videoTutorial.png";
import { RiFileList3Line } from "react-icons/ri";
import getAccessApi from "../images/GetAccess.jpg";
import { BsYoutube } from "react-icons/bs";
import map from "../images/map.svg";
import "./styles/Promote.css";

const Promote = () => {
    return (
        <div className="promote" id="promote">
            <div className="growthHack">
                <img src={growthHacks} />
                <div className="content">
                    <h1>Access Exclusive Growth Marketing Hacks Library</h1>
                    <p>
                        We’ve cooked the perfect recipe for All your Growth
                        Marketing needs. Skyrocket your Business with Top-Secret
                        Growth Hacks.
                    </p>
                    <button>VISIT GROWTH HACKS LIBRARY</button>
                </div>
            </div>
            <div className="tutorials">
                <div className="tooltutorial">
                    <img src={toolTutorial} />
                    <h2>Tutorials for Tools, Growth Hacks & more</h2>
                    <button>
                        <RiFileList3Line /> Visit Tutorial
                    </button>
                </div>
                <div className="yttutorial">
                    <img src={ytTutorial} />
                    <h2>Video Tutorials to help you do more in less time!</h2>
                    <button>
                        <BsYoutube /> Visit Youtube
                    </button>
                </div>
            </div>
            <div className="getAccessApi">
                <div className="content">
                    <h1>Get Access to API's for select tools.</h1>
                    <p>
                        Supercharge your apps with Prospectss API to help you
                        with contact data, enrichment, lead gen, outreach &
                        more.
                    </p>
                    <button>Know More</button>
                </div>
                <img src={getAccessApi} />
            </div>
            <div className="freeSignup">
                <img src={map} />
                <div className="container">
                    <h2>
                        The Secret Tool used by the Growth <br/>
                        Marketing Experts.<br/>
                        Claim your Free Account Now.
                    </h2>
                    <button>Signup for Free</button>
                </div>
            </div>
        </div>
    );
};

export default Promote;
