"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Collage.module.css';

const Collage = () => {
  return (  
    <div className={styles.collageContainer}>
        <h2 className={styles.mainHeader}>DESIGNED FOR REAL COACHES</h2>

         <Image
          src="/assets/images/Trainers/Collage/Collage.png"
            alt="Collage Image 1"
            width={1200}
            height={1200}
            className={styles.collageImage}
            objectFit='contain'
        />
    </div> 
);
}
 
export default Collage;