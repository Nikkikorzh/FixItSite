import { useState } from 'react'
import styles from './BookingForm.module.css'

const serviceOptions = [
  'Washer / Dryer',
  'Refrigerator',
  'Oven / Range',
  'Dishwasher',
  'HVAC / AC Unit',
  'Small Appliance',
  'Other',
]

const initialValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  problem: '',
}

const initialErrors = {
  name: '',
  phone: '',
  email: '',
  service: '',
  problem: '',
}

function validatePhone(value) {
  const digits = value.replace(/\D/g, '')
  return digits.length >= 10
}

function validateEmail(value) {
  if (!value) return true
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export default function BookingForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState(initialErrors)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = (fieldValues = values) => {
    const errs = { ...errors }

    if ('name' in fieldValues) {
      errs.name = fieldValues.name.trim().length < 2
        ? 'Please enter your full name (at least 2 characters).'
        : ''
    }
    if ('phone' in fieldValues) {
      errs.phone = !validatePhone(fieldValues.phone)
        ? 'Please enter a valid 10-digit US phone number.'
        : ''
    }
    if ('email' in fieldValues) {
      errs.email = !validateEmail(fieldValues.email)
        ? 'Please enter a valid email address.'
        : ''
    }
    if ('service' in fieldValues) {
      errs.service = !fieldValues.service ? 'Please select an appliance type.' : ''
    }
    if ('problem' in fieldValues) {
      errs.problem = fieldValues.problem.trim().length < 10
        ? 'Please describe the problem (at least 10 characters).'
        : ''
    }

    setErrors(errs)
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    const newVal = name === 'phone' ? formatPhone(value) : value
    const updated = { ...values, [name]: newVal }
    setValues(updated)
    if (touched[name]) validate({ [name]: newVal })
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    validate({ [name]: values[name] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const allTouched = Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {})
    setTouched(allTouched)
    const errs = validate(values)
    const hasError = Object.values(errs).some(Boolean)
    if (!hasError) setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="booking" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.success}>
            <span className={styles.successIcon}>✅</span>
            <h2 className={styles.successTitle}>Request Received!</h2>
            <p className={styles.successText}>
              Thank you, <strong>{values.name}</strong>! We'll call you at{' '}
              <strong>{values.phone}</strong> within 30 minutes to confirm your appointment.
            </p>
            <button className={styles.resetBtn} onClick={() => { setValues(initialValues); setErrors(initialErrors); setTouched({}); setSubmitted(false) }}>
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <div className={styles.info}>
            <span className={styles.eyebrow}>Schedule a Repair</span>
            <h2 className={styles.title}>Book Your Appointment Today</h2>
            <p className={styles.subtitle}>
              Fill out the form and a technician will call you within 30 minutes
              to confirm availability and provide a free estimate.
            </p>
            <ul className={styles.perks}>
              <li><span className={styles.check}>✓</span> No call-out fee</li>
              <li><span className={styles.check}>✓</span> 2–4 hour arrival window</li>
              <li><span className={styles.check}>✓</span> 90-day parts & labor warranty</li>
              <li><span className={styles.check}>✓</span> Upfront transparent pricing</li>
            </ul>
            <div className={styles.callout}>
              <strong>Need emergency service?</strong>
              <a href="tel:+17135550192" className={styles.callLink}>📞 (713) 555-0192</a>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.row}>
              <div className={`${styles.field} ${errors.name && touched.name ? styles.fieldError : ''} ${!errors.name && touched.name ? styles.fieldSuccess : ''}`}>
                <label className={styles.label} htmlFor="name">
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  className={styles.input}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="name"
                />
                {errors.name && touched.name && (
                  <span className={styles.errorMsg}>{errors.name}</span>
                )}
              </div>

              <div className={`${styles.field} ${errors.phone && touched.phone ? styles.fieldError : ''} ${!errors.phone && touched.phone ? styles.fieldSuccess : ''}`}>
                <label className={styles.label} htmlFor="phone">
                  Phone Number <span className={styles.required}>*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(713) 555-0192"
                  className={styles.input}
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="tel"
                />
                {errors.phone && touched.phone && (
                  <span className={styles.errorMsg}>{errors.phone}</span>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={`${styles.field} ${errors.email && touched.email ? styles.fieldError : ''} ${!errors.email && touched.email && values.email ? styles.fieldSuccess : ''}`}>
                <label className={styles.label} htmlFor="email">
                  Email Address <span className={styles.optional}>(optional)</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@email.com"
                  className={styles.input}
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  autoComplete="email"
                />
                {errors.email && touched.email && (
                  <span className={styles.errorMsg}>{errors.email}</span>
                )}
              </div>

              <div className={`${styles.field} ${errors.service && touched.service ? styles.fieldError : ''} ${!errors.service && touched.service ? styles.fieldSuccess : ''}`}>
                <label className={styles.label} htmlFor="service">
                  Appliance Type <span className={styles.required}>*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  className={`${styles.input} ${styles.select}`}
                  value={values.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="">Select an appliance…</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
                {errors.service && touched.service && (
                  <span className={styles.errorMsg}>{errors.service}</span>
                )}
              </div>
            </div>

            <div className={`${styles.field} ${errors.problem && touched.problem ? styles.fieldError : ''} ${!errors.problem && touched.problem ? styles.fieldSuccess : ''}`}>
              <label className={styles.label} htmlFor="problem">
                Describe the Problem <span className={styles.required}>*</span>
              </label>
              <textarea
                id="problem"
                name="problem"
                rows={5}
                placeholder="e.g. My washing machine won't spin and makes a loud noise during the cycle..."
                className={`${styles.input} ${styles.textarea}`}
                value={values.problem}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className={styles.charCount}>
                {values.problem.length} / 500
              </div>
              {errors.problem && touched.problem && (
                <span className={styles.errorMsg}>{errors.problem}</span>
              )}
            </div>

            <button type="submit" className={styles.submitBtn}>
              Request a Free Estimate
            </button>
            <p className={styles.privacy}>
              🔒 Your information is private and will never be shared.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
