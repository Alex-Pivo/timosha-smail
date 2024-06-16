'use client';
// ScrollContext.js
import React, { createContext, useContext, useRef } from 'react';

interface ScrollContextType {
    contactSectionRef: React.RefObject<HTMLDivElement>;
    scrollToContact: () => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const headerOffset = 120; // Replace with your header's height

    const scrollToContact = () => {
        if (contactSectionRef.current) {
            const elementPosition = contactSectionRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        } else {
            console.warn("ScrollProvider: Contact section reference is not available.");
        }
    };

    return (
        <ScrollContext.Provider value={{ contactSectionRef, scrollToContact }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) {
        console.warn("useScroll: ScrollProvider is missing.");
        return {
            contactSectionRef: { current: null },
            scrollToContact: () => {},
        };
    }
    return context;
};
