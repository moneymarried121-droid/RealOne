import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })
  const navigate = useNavigate()

  
  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate('/', { state: { contact: form } })
  }

  return (
    <section className="page contact">
      <div className="container">
        <h1>Contact Me</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: 8 }}>
            <input name="firstName" placeholder="First name" value={form.firstName} onChange={handleChange} />
            <input name="lastName" placeholder="Last name" value={form.lastName} onChange={handleChange} />
          </div>
          <input name="phone" placeholder="Contact number" value={form.phone} onChange={handleChange} />
          <input name="email" placeholder="Email address" value={form.email} onChange={handleChange} />
          <textarea name="message" placeholder="Message" rows={6} value={form.message} onChange={handleChange} />
          <div>
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  )
}
