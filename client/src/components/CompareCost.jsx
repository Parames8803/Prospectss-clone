import React from 'react'
import './styles/CompareCost.css'
import hunter from "../images/hunter.png"
import snov from "../images/snov.png"
import d7 from "../images/d7.png"
import lusha from "../images/lusha.png"
import phantom from "../images/phantom.png"
import clearbit from "../images/clearbit.png"
import prospectss from "../images/prospectss.png"
import versus from "../images/versus.png"

const CompareCost = () => {
  return (
    <div className="compare" id='compare'>
        <div className="intro">
            <h1>More Accurate. Less Pricey. All-In-One.</h1>
        </div>
        <div className="desc">
            <p>You can save upto <b>$$$/month</b> with Prospectss</p>
        </div>
        <div className="compareCards">
            <div className="card1">
                <div className="imgs">
                    <img src={hunter} />
                    <img src={snov} />
                    <img src={d7} />
                    <img src={lusha} />
                    <img src={phantom} />
                    <img src={clearbit} />
                </div>
                <div className="money">
                    <h1>$$$/month</h1>
                </div>
                <p>Costly Tools. Multiple Subscriptions 🤢</p>
            </div>
            <div className="divider">
                <img src={versus} />
            </div>
            <div className="card2">
                <div className="imgs">
                    <img src={prospectss} />
                </div>
                <div className="money">
                    <h1>⚡$49/month</h1>
                </div>
                <p>ALL IN ONE UNLIMITED</p>
            </div>
        </div>
    </div>
  )
}

export default CompareCost