'use client';

import React from 'react';
import styles from './Hero.module.css';
import useIsMobile from '@/app/hooks/useIsMobile';

function Hero() {
  const isMobile = useIsMobile();
  return (
    <>
    {isMobile && <div className={styles.breadcrumb}>
      <span>HOME | </span>
      <span>  SHOP</span>
    </div>}
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Discover Our Amazing Product</h1>
        <p className={styles.heroSubtitle}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. 
          Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </div>
    </section>
    </>
  );
}

export default Hero;
