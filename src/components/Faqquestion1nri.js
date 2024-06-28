import React, { useState } from 'react';
import styles from '../styles/Faqquestion1nri.module.css';

function Faqquestion1nri() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.faqcontainerrental}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className={styles.faqcontrental}>
                Can a foreigner buy property in India?
                <span>{isHovered ? '▲' : '▼'}</span> {/* Arrow icon to indicate dropdown */}
            </p>
            {isHovered && (
                <p className={styles.secondlinefaq}>
                    Foreigners who are not of Indian origin and live outside India are generally not allowed to buy immovable property in India. The only exception is if they inherit the property from a person who was a resident of India. To legally own property in India, foreigners must reside in the country for at least 183 days in a financial year. They cannot purchase property using a tourist visa, as it only permits a stay of up to 180 days. Additionally, a foreigner cannot jointly purchase property with an eligible person if they themselves are not eligible.
                </p>
            )}
        </div>
    );
}

export default Faqquestion1nri;
