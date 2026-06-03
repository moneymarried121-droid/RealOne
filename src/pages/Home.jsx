import headshot from '../assets/headshot.jpeg'
import { Link, useLocation } from 'react-router-dom'

export default function Home() {
  const location = useLocation()
  const contact = location.state?.contact

  return (
    <section className="page home">
      <div className="container">
        <h1>Welcome to My Portfolio</h1>
        <p className="mission">I build web applications and craft clean, maintainable code that solves real problems.</p>
        <Link to="/about" className="btn">Learn more about me</Link>

        <div style={{ marginTop: 20 }}>
          <img src={headshot} alt="Headshot" className="headshot" />
        </div>

        {contact && (
          <div className="contact-received" role="status">
            <strong>Message sent:</strong> Thanks {contact.firstName} — I'll contact you at {contact.email || contact.phone} soon.
          </div>
        )}
      </div>
    </section>
  )
}
