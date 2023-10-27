import React from "react";
import "./styles/TrialPlan.css"

const TrialPlan = () => {
    return (
        <div className="trialPlan" id="trialPlan">
            <div className="price">
                <h1>Trial Plan</h1>
                <p>
                    $0<span>/Month</span>
                </p>
            </div>
            <div className="credits">
                <h1>30</h1>
                <p>CREDITS</p>
            </div>
            <div className="getPlan">
                <button>Start Free Trial</button>
                <p>No Credit Card Required</p>
            </div>
        </div>
    );
};

export default TrialPlan;
