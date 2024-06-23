// ScrollContext.js
'use client';
import React, { createContext, useContext, useRef, useState } from 'react';

interface ScrollContextType {
    contactSectionRef: React.RefObject<HTMLDivElement>;
    scrollToContact: (param?: string) => void;
    scrollParam?: string;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const contactSectionRef = useRef<HTMLDivElement>(null);
    const [scrollParam, setScrollParam] = useState<string | undefined>(undefined);
    const headerOffset = 120; // Replace with your header's height

    const scrollToContact = (param?: string) => {
        if (contactSectionRef.current) {
            const elementPosition = contactSectionRef.current.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });

            if (param) {
                console.log(`Setting scrollParam: ${param}`);
                setScrollParam(param);
            }
        } else {
            console.warn("ScrollProvider: Contact section reference is not available.");
        }
    };

    return (
        <ScrollContext.Provider value={{ contactSectionRef, scrollToContact, scrollParam }}>
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
