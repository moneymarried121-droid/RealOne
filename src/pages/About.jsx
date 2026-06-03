import headshot from '../assets/headshot.jpeg'

// About page with legal name, headshot, short paragraph, and Resume link
export default function About() {
  return (
    <section className="page about">
      <div className="container">
        <h1>About Me</h1>
        <img src={headshot} alt="Headshot" className="headshot" />
        <p>
          Legal name: <strong>Amare Walters Lyte</strong>
        </p>
        <p>
          I am currently a software engineer in training, enrolled at Centennial College and entering my 2nd year.
          I am still in school while gaining hands-on experience building web applications. I focus on building
          accessible, performant React applications and enjoy learning new technologies and contributing to
          open-source projects.
        </p>
        <p>
          I hope to build great, helpful, and problem-solving applications and web apps in the future.
        </p>
        <p>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">Download my Resume (PDF)</a>
        </p>
      </div>
    </section>
  )
}
