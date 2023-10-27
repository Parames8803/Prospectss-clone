import React, { useState } from "react";
import "./styles/FrequentlyAsked.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";

const FrequentlyAsked = (props) => {
    const intialDivs = props.Object;
    const title = props.Title;

    const [divStates, setDivStates] = useState(intialDivs);

    const toggleDiv = (divId) => {
        const updatedDivStates = divStates.map((div) => ({
            ...div,
            isOpen: div.id === divId ? !div.isOpen : false,
        }));
        setDivStates(updatedDivStates);
    };

    return (
        <div
            className="freqAskedQuest"
            id="freqAskedQuest">
            <h1 className="title">{title}</h1>
            {divStates &&
                Array.isArray(divStates) &&
                divStates.map((div) => (
                    <div
                        className="questions"
                        onClick={() => toggleDiv(div.id)}
                        key={div.id}>
                        <h2 className="quest">
                            <h2>{div.quest}</h2>
                            <span>
                                {div.isOpen ? (
                                    <MdKeyboardArrowUp />
                                ) : (
                                    <MdKeyboardArrowDown />
                                )}
                            </span>
                        </h2>
                        {div.isOpen && <h2 className="ans">{div.ans}</h2>}
                    </div>
                ))}
        </div>
    );
};

export default FrequentlyAsked;
