import React, { useEffect, useState } from "react";
import Logo from "../images/Logo.svg";
import "./styles/Navbar.css";

const Navbar = ({ handleLinkHover, type }) => {
    const [home, setHome] = useState(true);
    // const token = localStorage.getItem("token");

    useEffect(() => {
        if (type == 'Signup for free') {
            setHome(true);
        } else {
            setHome(false);
        }
    },[])

    return (
        <div className="navbar">
            <div className="logo">
                <img
                    src={Logo}
                    alt=""
                />
            </div>
            <div className="links">
                <a
                    href="/"
                    onMouseEnter={() => handleLinkHover(false)}>
                    Home
                </a>
                <a
                    href="#tools"
                    onMouseEnter={() => handleLinkHover(true)}>
                    Tools
                </a>
                <a
                    href="#pricing"
                    onMouseEnter={() => handleLinkHover(false)}>
                    Pricing
                </a>
                <a href="#">Whitelabel</a>
                <a href="#">Roadmap</a>
                <a href="#">Blog</a>
                {home && <a href="/authorize">Login</a>}
            </div>
            <div className="signup">
                <a href="/authorize">{type}</a>
            </div>
        </div>
    );
};

export default Navbar;
