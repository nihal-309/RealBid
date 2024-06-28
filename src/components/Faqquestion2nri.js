import React, { useState } from 'react';
import styles from '../styles/Faqquestion2nri.module.css';

function Faqquestion2nri() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={styles.faqcontainerrental}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className={styles.faqcontrental}>
            How many properties NRI can buy in India?
                <span>{isHovered ? '▲' : '▼'}</span> {/* Arrow icon to indicate dropdown */}
            </p>
            {isHovered && (
                <p className={styles.secondlinefaq}>
                    An NRI can purchase an unlimited number of residential or commercial properties in India. However, they are not allowed to buy agricultural or plantation land.
                </p>
            )}
        </div>
    );
}

export default Faqquestion2nri;
