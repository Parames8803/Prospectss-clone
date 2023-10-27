import React from "react";
import "./styles/Home.css";
import clientLogo from "../images/clientlogo.png";
import Tools from "../components/Tools";
import CompareCost from "../components/CompareCost";
import Pricing from "./Pricing";
import ToolLinks from "../components/ToolLinks";
import TrialPlan from "../components/TrialPlan";
import FrequentlyAsked from "../components/FrequentlyAsked";
import Promote from "../components/Promote";
import Layout from "./Layout";

const Home = () => {
    const intialDivs = [
        {
            id: 1,
            isOpen: false,
            quest: "Why should I choose Prospectss over others?",
            ans: "We have some Amazing Growth Marketing tools to help you scale your Business. Unlike most similar tools on the market, we provide you with 100% Accurate Results at a much more Affordable Rate.",
        },
        {
            id: 2,
            isOpen: false,
            quest: "What are Credits?",
            ans: "In order to use our tools, you need credits. Our tools require a specific amount of credits to work. We have different plans that offer different amounts of credits. You can check our Pricing page to select a suitable plan for your business.",
        },
        {
            id: 3,
            isOpen: false,
            quest: "How do credits work?",
            ans: "Each time you use our tools to carry out your Tasks, you are charged with a specific amount of credits. The amount of credits charged depends on what tool you use & the amount of data you process.",
        },
        {
            id: 4,
            isOpen: false,
            quest: "How do your tools work?",
            ans: "All our tools are very Simple & Easy to use. We’ve mentioned in the description of our tools page on How to Use our tools. You can also check our Tutorials, Blogs, YouTube video Guides & Growth Hack Articles to understand how to use the tools & what benefits you can drive from them.",
        },
        {
            id: 5,
            isOpen: false,
            quest: "Do I need to share my Social Media credentials to use your tools?",
            ans: "No, you don’t have to share your Social Media credentials to use our tools.",
        },
        {
            id: 6,
            isOpen: false,
            quest: "Do credits expire?",
            ans: "If you subscribe to a paid plan, credits will be added to your account according to your selected plan. These credits Do Not Expire & Roll Over as long as you are Subscribed to a Paid Plan. Credits only expire if you fail to renew your plan or move to a free/trial plan.",
        },
        {
            id: 7,
            isOpen: false,
            quest: "Do you take Feature Requests?",
            ans: "Yes, we take Feature Requests & all our customer’s suggestions to make our tools optimized as per User needs & wants. You can request or suggest a tool you would like to see by clicking here & we might make it for you.",
        },
        {
            id: 8,
            isOpen: false,
            quest: "Do you have a Refund Policy?",
            ans: "No, we do not have a refund policy.",
        },
        {
            id: 9,
            isOpen: false,
            quest: "Do you have a Credit Volume Discount?",
            ans: "Yes, we offer a Credit Volume Discount which you can find right below our Pricing section. It depends on how many credits you are looking for & for which tools.",
        },
        {
            id: 10,
            isOpen: false,
            quest: "Do you have an API?",
            ans: "We are working on the API, which should be launched pretty soon. You can Subscribe to our Newsletter & get a special invite before we launch it for everyone.",
        },
        {
            id: 11,
            isOpen: false,
            quest: "Can I invite Team Members to my account?",
            ans: "Currently, you can’t invite team members to your account. However, this feature is under development & will be available soon. ",
        },
        {
            id: 12,
            isOpen: false,
            quest: "Do you provide live Demo/Training?",
            ans: "If you are subscribed to the Ultimate plan, you can request a 1-hour live demo/training session. We do not offer this on any other plans. To request a demo/ training, you can contact us via Live Chat or the Contact Us form.",
        },
        {
            id: 13,
            isOpen: false,
            quest: "How do I cancel my Plan?",
            ans: "Once you are logged in on Prospectss, go to the Pricing & Subscription page & cancel your ongoing subscription plan. Once you cancel your current plan, you will be downgraded to the free plan.",
        },
        {
            id: 14,
            isOpen: false,
            quest: "Where can I report an Issue?",
            ans: "To report an issue, you can reach out to us via live chat or the Contact Us form & our team will get it fixed for you. You can also chat with us live from Live Support for any queries or concerns.",
        },
    ];
    return (
        <>
            <Layout>
                <div
                    className="home"
                    id="home">
                    <h1 className="intro">
                        ⚡Supercharge your
                        <br />
                        Marketing & Sales with
                        <br />
                        <span>Killer Growth Marketing Tools</span>
                        <p>
                            Generate Leads, Automated Outreach, Extract Data,
                            <br /> Finding Contacts, Growth Hacks & So Much More
                        </p>
                    </h1>
                    <button className="signup">Signup for Free</button>
                    <p className="trusted">
                        Trusted by <b>93166+</b> Marketing Professional
                    </p>
                    <img src={clientLogo} />
                </div>
                <Tools />
                <CompareCost />
                <Pricing />
                <ToolLinks />
                <TrialPlan />
                <FrequentlyAsked
                    object={intialDivs}
                    Title={"Frequently Asked Questions"}
                />
                <Promote />
            </Layout>
        </>
    );
};

export default Home;
