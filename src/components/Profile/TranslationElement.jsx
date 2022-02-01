import React from 'react';

const TranslationElement = ({ text, onDelete, onClick }) => {
    return (
        <div className="Profile-translation-element">
            <h4 className="Profile-translation-text" onClick={onClick}>{text}</h4>
            <button className="Profile-translation-delete" onClick={onDelete}>X</button>
        </div>
    )
};

export default TranslationElement;
