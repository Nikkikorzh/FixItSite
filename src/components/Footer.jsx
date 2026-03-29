import styles from './Footer.module.css'

const socials = [
  { label: 'Facebook', img: '/facebook.png', href: 'https://facebook.com' },
  { label: 'Instagram', img: '/instagram.png', href: 'https://instagram.com' },
  { label: 'YouTube', img: '/youtube.png', href: 'https://youtube.com' },
]

const services = [
  'Washer & Dryer Repair',
  'Refrigerator Repair',
  'Oven & Range Repair',
  'Dishwasher Repair',
  'HVAC & AC Repair',
  'Small Appliance Repair',
]

const links = [
  { label: 'About Us', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <a href="#" className={styles.logo}>
              <span>FixIt<strong>Pro</strong></span>
            </a>
            <p className={styles.tagline}>
              Your trusted appliance repair experts in the Greater Houston Area.
              Licensed, insured, and committed to same-day service.
            </p>
            <div className={styles.socials}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className={styles.socialBtn}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={s.img} alt={s.label} className={styles.socialIcon} />
                </a>
              ))}
            </div>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.colList}>
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className={styles.colLink}>{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.colList}>
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.colLink}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li>
                <span className={styles.contactIcon}>📞</span>
                <a href="tel:+17135550192" className={styles.colLink}>
                  (713) 555-0192
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}>✉️</span>
                <a href="mailto:support@fixitpro.com" className={styles.colLink}>
                  support@fixitpro.com
                </a>
              </li>
              <li>
                <span className={styles.contactIcon}>📍</span>
                <address className={styles.address}>
                  4821 Westheimer Rd,<br />
                  Houston, TX 77056
                </address>
              </li>
              <li>
                <span className={styles.contactIcon}>🕐</span>
                <div className={styles.hours}>
                  <span>Mon – Fri: 7am – 8pm</span>
                  <span>Sat – Sun: 8am – 6pm</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} FixItPro. All rights reserved.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>BBB Accredited</span>
            <span className={styles.badge}>EPA Certified</span>
            <span className={styles.badge}>🔒 Licensed & Insured</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
