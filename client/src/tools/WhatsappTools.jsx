import React from "react";
import "./styles/WhatsappTools.css";
import whatsapp1 from "../images/whatsapp1.svg"
import whatsapp2 from "../images/whatsapp2.svg"

const WhatsappTools = () => {
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
        <div className="whatsapp">
            <h1 className="title">Whatsapp Tools</h1>
            <div className="links">
                <div className="tool">
                    <a href="http://">
                        <img src={whatsapp1} />
                        <div className="toolDesc">
                            <h2 className="toolName">WhatsApp Group Member Details Extractor</h2>
                            <p>
                            Extract All Members from a Whatsapp Group along with all the details.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="tool">
                    <a href="http://">
                        <img src={whatsapp2} />
                        <div className="toolDesc">
                            <h2 className="toolName">Whatsapp Auto Message Sender</h2>
                            <p>
                            Send mass private messages automatically in the background without getting banned.
                            </p>
                            <UnlimitedUsage text="New Tool"/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WhatsappTools;
