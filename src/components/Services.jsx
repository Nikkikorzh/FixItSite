import styles from './Services.module.css'

const services = [
  {
    icon: '🧺',
    title: 'Washer & Dryer Repair',
    description:
      'Fix leaks, drum issues, heating failures, spin problems and error codes on all major brands — Whirlpool, LG, Samsung, Maytag and more.',
    tags: ['Same-day', 'All brands'],
  },
  {
    icon: '🧊',
    title: 'Refrigerator Repair',
    description:
      'Compressor, thermostat, ice maker, water dispenser, door seal issues — we restore proper cooling fast to protect your food.',
    tags: ['Emergency service', 'No-frost systems'],
  },
  {
    icon: '🍳',
    title: 'Oven & Range Repair',
    description:
      'Gas and electric oven repairs including igniter replacement, heating element issues, temperature calibration, and control board failures.',
    tags: ['Gas & electric', 'Safety certified'],
  },
  {
    icon: '🍽️',
    title: 'Dishwasher Repair',
    description:
      'Leaking, not draining, poor cleaning, door latch problems — we handle all dishwasher brands and models quickly and affordably.',
    tags: ['All models', 'Leak-free guarantee'],
  },
  {
    icon: '🌬️',
    title: 'HVAC & AC Repair',
    description:
      'Central air, window units, mini-splits — diagnose refrigerant issues, compressor faults, and airflow problems to keep you comfortable year-round.',
    tags: ['EPA certified', 'Year-round'],
  },
  {
    icon: '🔧',
    title: 'Small Appliance Repair',
    description:
      'Microwaves, garbage disposals, trash compactors and more. Quick bench diagnostics and affordable parts replacement.',
    tags: ['Flat-rate pricing', 'Quick turnaround'],
  },
]

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>What We Fix</span>
          <h2 className={styles.title}>Expert Repair for Every Appliance</h2>
          <p className={styles.subtitle}>
            From refrigerators to dishwashers, our certified technicians handle it all —
            with transparent pricing and a 90-day parts & labor warranty.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.tags}>
                {service.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
              <a href="#booking" className={styles.cardLink}>
                Book this service →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
