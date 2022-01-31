import React from 'react';

const TranslationElement = ({ text }) => {
    return (
        <div className="Profile-translation-element">
            <span className="Profile-translation-text">{text}</span>
            <button className="Profile-translation-delete">X</button>
        </div>
    )
};

export default TranslationElement;
