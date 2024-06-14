import React from "react";
import { CSSTransition } from "react-transition-group";
import styles from './Modal.module.scss';
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;
const ModalContainer = styled(motion.div)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 370px;
  height: 170px;
  display: inline-flex;
  padding: 60px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border: 1px solid #ccc;
  border-radius: 30px;
  background: #F5F5F5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 280px;
    padding: 30px;
  }
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
    right: 22px;
    top: 22px;
  cursor: pointer;
    z-index: 1001;
`;
const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 }
};
const containerVariant = {
    initial: { top: "-50%", transition: { type: "spring" } },
    isOpen: { top: "50%" },
    exit: { top: "-50%" }
};
interface ModalProps {
    onClose: any;
    show: boolean;
}

export const ModalText: React.FC<ModalProps> = ({ onClose, show }) => {
    const modalClasses = [styles.modal];
    if (show) {
        modalClasses.push(styles.show);
    }
    return (
        <div>
            {show && (
            <AnimatePresence>
                    <Overlay
                        initial={"initial"}
                        animate={"isOpen"}
                        exit={"exit"}
                        variants={modalVariant}
                    >
                        <ModalContainer variants={containerVariant}>
                            <CloseButton
                                onClick={onClose}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20.39 20.39"
                            >
                                <title>close</title>
                                <line
                                    x1="19.39"
                                    y1="19.39"
                                    x2="1"
                                    y2="1"
                                    fill="none"
                                    stroke="#1D1D1D"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                                <line
                                    x1="1"
                                    y1="19.39"
                                    x2="19.39"
                                    y2="1"
                                    fill="none"
                                    stroke="#1D1D1D"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    strokeWidth="2"
                                />
                            </CloseButton>
                            <div className={modalClasses.join(' ')}>
                                <div className={styles.modalContent}>
                                    <p className={styles.heart}>💚</p>
                                    <div className={styles.txt}>
                                        <p className={styles.mainTxt}>Успішно!</p>
                                        <p className={styles.moreTxt}>Ми отримали ваш запит і відповімо вам найближчим часом.</p>
                                    </div>
                                    {/*<button onClick={onClose}>*/}
                                    {/*<svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none">*/}
                                    {/*        <path fillRule="evenodd" clipRule="evenodd"*/}
                                    {/*              d="M25.9204 8.87067C26.038 8.75323 26.1313 8.61378 26.195 8.46028C26.2587 8.30678 26.2915 8.14224 26.2916 7.97605C26.2917 7.80986 26.2591 7.64528 26.1956 7.4917C26.1321 7.33812 26.039 7.19856 25.9215 7.08097C25.8041 6.96339 25.6646 6.87008 25.5111 6.80639C25.3576 6.7427 25.1931 6.70986 25.0269 6.70976C24.8607 6.70966 24.6961 6.74229 24.5426 6.8058C24.389 6.8693 24.2494 6.96243 24.1318 7.07987L16.5 14.7117L8.87043 7.07987C8.63295 6.8424 8.31087 6.70898 7.97503 6.70898C7.63919 6.70898 7.3171 6.8424 7.07963 7.07987C6.84215 7.31735 6.70874 7.63943 6.70874 7.97527C6.70874 8.31111 6.84215 8.6332 7.07963 8.87067L14.7114 16.5003L7.07963 24.1299C6.96204 24.2475 6.86877 24.387 6.80513 24.5407C6.74149 24.6943 6.70874 24.859 6.70874 25.0253C6.70874 25.1916 6.74149 25.3562 6.80513 25.5099C6.86877 25.6635 6.96204 25.8031 7.07963 25.9207C7.3171 26.1581 7.63919 26.2916 7.97503 26.2916C8.14132 26.2916 8.30598 26.2588 8.45961 26.1952C8.61325 26.1315 8.75284 26.0383 8.87043 25.9207L16.5 18.2889L24.1318 25.9207C24.3693 26.1579 24.6913 26.291 25.0269 26.2908C25.3625 26.2906 25.6843 26.157 25.9215 25.9196C26.1587 25.6821 26.2918 25.3601 26.2916 25.0245C26.2914 24.6889 26.1579 24.3671 25.9204 24.1299L18.2886 16.5003L25.9204 8.87067Z"*/}
                                    {/*              fill="#1D1D1D"/>*/}
                                    {/*    </svg>*/}
                                    {/*</button>*/}
                                </div>
                            </div>
                        </ModalContainer>
                    </Overlay>
            </AnimatePresence>
            )}
        </div>

    );
};
