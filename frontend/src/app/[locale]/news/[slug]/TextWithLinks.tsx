import React from 'react';

const TextWithLinks = ({ text }:any) => {
    const parts = text.split(/([\w\u0400-\u04FF]+:url:https?:\/\/[^\s]+)/g);

    return (
        <>
            {parts.map((part:any, i:any) => {
                const match = part.match(/([\w\u0400-\u04FF]+):url:(https?:\/\/[^\s]+)/);
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
