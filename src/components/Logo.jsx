import { Link } from 'react-router-dom'

// Simple SVG logo component. Replace initials "LV" with your own if desired.
export default function Logo() {
  return (
    <Link to="/" className="site-logo" aria-label="Home">
      <svg width="44" height="44" viewBox="0 0 100 100" role="img">
        <circle cx="50" cy="50" r="48" fill="var(--accent)" />
        <text x="50%" y="54%" textAnchor="middle" fontSize="40" fill="#fff" fontFamily="var(--heading)">
          AL
        </text>
      </svg>
    </Link>
  )
}
