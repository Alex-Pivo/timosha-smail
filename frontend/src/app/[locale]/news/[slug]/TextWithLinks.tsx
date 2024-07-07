// components/TextWithLinks.js
import React from 'react';

const TextWithLinks = ({ text }:any) => {
    const parts = text.split(/(\w+:url:https?:\/\/[^\s]+)/g);

    return (
        <>
            {parts.map((part:any, i:any) => {
                const match = part.match(/(\w+):url:(https?:\/\/[^\s]+)/);
                if (match) {
                    const word = match[1];
                    const url = match[2];
                    return (
                        <a key={i} href={url} target="_blank" rel="noopener noreferrer">
                            {word}
                        </a>
                    );
                }
                return part;
            })}
        </>
    );
};

export default TextWithLinks;
