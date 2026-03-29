import styles from './WhyUs.module.css'

const features = [
  { icon: '1', title: 'Same-Day Service', desc: 'We arrive within 2–4 hours of your call, 7 days a week including holidays.' },
  { icon: '2', title: '90-Day Warranty', desc: 'All parts and labor are backed by our 90-day guarantee — no questions asked.' },
  { icon: '3', title: 'Upfront Pricing', desc: 'You see the full price before we start. No hidden fees, no surprise charges.' },
  { icon: '4', title: 'Licensed & Insured', desc: 'All technicians are EPA-certified, background-checked, and fully insured.' },
]

const reviews = [
  {
    name: 'Sarah M.',
    city: 'Houston, TX',
    rating: 5,
    text: 'The technician arrived in under 3 hours and fixed our washer the same day. Pricing was very fair and he was super professional!',
  },
  {
    name: 'James P.',
    city: 'Katy, TX',
    rating: 5,
    text: 'Our fridge stopped cooling on a Saturday night. FixIt Pro sent someone out the next morning. Saved everything in the fridge. Amazing!',
  },
  {
    name: 'Linda R.',
    city: 'Sugar Land, TX',
    rating: 5,
    text: 'Been using these guys for 5 years. Always reliable, honest, and reasonably priced. Highly recommend for any appliance issue.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.left}>
            <span className={styles.eyebrow}>Why Choose Us</span>
            <h2 className={styles.title}>Repair Done Right,<br />Every Single Time</h2>
            <p className={styles.subtitle}>
              Over 15,000 satisfied customers in the Greater Houston Area trust us
              to get their appliances running like new.
            </p>
            <div className={styles.features}>
              {features.map((f) => (
                <div key={f.title} className={styles.feature}>
                  <span className={styles.featureIcon}>{f.icon}</span>
                  <div>
                    <strong className={styles.featureTitle}>{f.title}</strong>
                    <p className={styles.featureDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imageWrap}>
              <div className={styles.imageCard}>
                <img
                  src="/techinican.jpg"
                  alt="Certified Technician On the Job"
                  className={styles.technicianImg}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imagePlaceholderIcon}>🔧</span>
                  <p>Certified Technician</p>
                  <p>On the Job</p>
                </div>
              </div>
              <div className={styles.badge}>
                <span className={styles.badgeStar}>★</span>
                <div>
                  <strong>4.9 / 5.0</strong>
                  <p>Based on 1,200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.reviews}>
          <h3 className={styles.reviewsTitle}>What Our Customers Say</h3>
          <div className={styles.reviewsGrid}>
            {reviews.map((r) => (
              <div key={r.name} className={styles.reviewCard}>
                <div className={styles.stars}>
                  {'★'.repeat(r.rating)}
                </div>
                <p className={styles.reviewText}>"{r.text}"</p>
                <div className={styles.reviewer}>
                  <div className={styles.avatar}>{r.name[0]}</div>
                  <div>
                    <strong>{r.name}</strong>
                    <span className={styles.reviewCity}>{r.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
