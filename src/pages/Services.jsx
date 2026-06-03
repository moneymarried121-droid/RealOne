
export default function Services() {
  const services = [
    { title: 'Web Development', description: 'Building responsive, accessible websites and web apps.' },
    { title: 'Live Servers', description: 'Managed live server hosting, deployment, and uptime monitoring.' },
    { title: 'Maintenance', description: 'Ongoing maintenance, updates and bug fixes.' },
  ]

  return (
    <section className="page services">
      <div className="container">
        <h1>Services</h1>
        <ul>
          {services.map((s) => (
            <li key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
