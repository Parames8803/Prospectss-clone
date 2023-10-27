import React from "react";
import Tools from "../components/Tools";
import Pricing from "./Pricing";
import ToolLinks from "../components/ToolLinks";
import TrialPlan from "../components/TrialPlan";
import FrequentlyAsked from "../components/FrequentlyAsked";
import map from "../images/map.svg";
import Layout from "./Layout";

const Tool = (props) => {
    const Component = props.Component;
    return (
        <>
            <Layout>
                <Component />
                <Pricing />
                <ToolLinks />
                <TrialPlan />
                <FrequentlyAsked
                    Object={props.Object}
                    Title={props.Title}
                />
                <Tools />
                <div className="freeSignup">
                    <img src={map} />
                    <div className="container">
                        <h2>
                            The Secret Tool used by the Growth <br />
                            Marketing Experts.
                            <br />
                            Claim your Free Account Now.
                        </h2>
                        <button>Signup for Free</button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default Tool;
