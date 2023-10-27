import React, { useState } from "react";
import "./styles/Authorization.css";
import Navbar from "../components/Navbar";
// import Dashboard from "./Dashboard";
import { BiSolidErrorCircle } from "react-icons/bi";

const Authorization = () => {
    // const [user, setUser] = useState(false)
    // const [errMsg, setErrMsg] = useState('')
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pageType, setPageType] = useState("login");

    const btnLogin = () => {
        if (pageType == "login") {
            setPageType("Signup for free");
        } else {
            setPageType("login");
        }
    };

    const btnSubmit = (e) => {
        e.preventDefault();
        console.log({
            username: username,
            email: email,
            password: password,
        });
    };

    // const token = localStorage.getItem("token")

    // if(token){
    //   setUser(true)
    // }else{
    //   setUser(false)
    // }

    return (
        // <>
        // {user == true ? (
        //   <>
        //   <Dashboard/>
        //   </>
        // ) : (
        <>
            <Navbar type={pageType} />
            <div className="formContainer">
                <h1 className="title">The Secret Tool used by</h1>
                <h1 className="title">Top Growth Marketing Experts.</h1>
                <p className="users">Used by 92980+ Marketing Professionals</p>
                <form
                    action=""
                    onSubmit={btnSubmit}>
                    {/* {errMsg && ( */}
                    <div className="error">
                        <div className="icon">
                            <BiSolidErrorCircle />
                        </div>
                        Incorrect Username
                    </div>
                    {/* )} */}
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                        required
                    />
                    <input
                        type="text"
                        placeholder="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        required
                    />
                    <p className="terms">
                        By signing up you agree to our <a href="">Terms</a> &{" "}
                        <a href="">Privacy Policy</a>
                    </p>
                    <button type="submit">GET STARTED!</button>
                </form>
                <p className="acc">
                    Already have an Account?{" "}
                    <a
                        href=""
                        onClick={btnLogin}>
                        Login
                    </a>
                </p>
                <p className="copyright">
                    Copyright © 2023 Prospectss. All Rights Reserved
                </p>
            </div>
        </>
        // {/* )}
        // </> */}
    );
};

export default Authorization;
