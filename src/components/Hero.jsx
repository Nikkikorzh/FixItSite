import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.container}>
        <div className={styles.badge}>Trusted Since 2005 · Licensed & Insured</div>
        <h1 className={styles.title}>
          Fast & Reliable<br />
          <span className={styles.accent}>Appliance Repair</span><br />
          You Can Count On
        </h1>
        <p className={styles.subtitle}>
          Same-day service for washers, dryers, refrigerators, ovens and more.
          Serving the Greater Houston Area — no fix, no fee guarantee.
        </p>
        <div className={styles.actions}>
          <a href="#booking" className={styles.btnPrimary}>
            Book a Repair
          </a>
          <a href="tel:+17135550192" className={styles.btnSecondary}>
            📞(713) 555-0192
          </a>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNum}>20+</span>
            <span className={styles.statLabel}>Years of Service</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>15k+</span>
            <span className={styles.statLabel}>Repairs Completed</span>
          </div>
          <div className={styles.divider} />
          <div className={styles.stat}>
            <span className={styles.statNum}>4.9★</span>
            <span className={styles.statLabel}>Average Rating</span>
          </div>
        </div>
      </div> 
    </section>
  )
}
