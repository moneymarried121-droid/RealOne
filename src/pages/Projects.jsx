import lyluxeVideo from '../assets/Lyluxe.mp4'
import empireVideo from '../assets/empireluxury.mp4'

export default function Projects() {
  const projects = [
    {
      title: 'Hair Business Website (Lyluxe)',
      description:
        'E-commerce site for a hair business with an adaptive stock system and admin tools.',
      video: lyluxeVideo,
      date: '2026-03-11',
    },
    {
      title: 'Car Rental Business (Empire Luxury Rentals)',
      description:
        "Booking system with an adaptive calendar that prevents double bookings for the same car, and an automated confirmation emailed to you once an Interac e-Transfer is received with the final steps to secure the rental.",
      video: empireVideo,
      date: '2026-05-23',
    },
  ]

  return (
    <section className="page projects">
      <div className="container">
        <h1>Projects</h1>
        <div className="project-grid">
          {projects.map((p) => (
            <article className="project-card" key={p.title}>
              {p.video ? (
                <video src={p.video} controls className="project-video" />
              ) : (
                <img src={p.image} alt={`${p.title} screenshot`} />
              )}
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <small>Completed: {p.date}</small>
              
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
