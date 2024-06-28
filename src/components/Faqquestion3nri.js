import React, { useState } from 'react';
import styles from '../styles/Faqquestion3nri.module.css';

function Faqquestion3nri() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.faqcontainerrental}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className={styles.faqcontrental}>
            Can OCI buy property in India?
                <span>{isHovered ? '▲' : '▼'}</span> {/* Arrow icon to indicate dropdown */}
            </p>
            {isHovered && (
                <p className={styles.secondlinefaq}>
                   If you hold Overseas Citizenship of India, you are permitted to buy only residential and commercial properties in India. You are not allowed to purchase agricultural land, plantation property, or farmhouses.
                </p>
            )}
        </div>
    );
}

export default Faqquestion3nri;
