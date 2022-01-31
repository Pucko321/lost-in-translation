import React from 'react';

const TranslationElement = ({ text, onDelete }) => {
    return (
        <div className="Profile-translation-element">
            <span className="Profile-translation-text">{text}</span>
            <button className="Profile-translation-delete" onClick={onDelete}>X</button>
        </div>
    )
};

export default TranslationElement;
