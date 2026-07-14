import { Link } from 'react-router-dom'

function About() {
  return (
    <main className="bg-surface px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-ink md:text-5xl">About</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Exterior specialists focused on clean installs and lasting results.
        </p>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-2xl font-semibold text-ink">Our approach</h2>
            <p className="mt-4 text-muted md:text-lg">
              We specialize in siding, aluminum wrapping, window capping, gutters,
              exterior finishing, and shutters. Every job is planned for weather
              protection first, then finished so the home looks sharp from the curb.
            </p>
            <p className="mt-4 text-muted md:text-lg">
              Whether you are a homeowner or a contractor partner, you get clear
              communication, careful workmanship, and exteriors built to hold up.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-ink">Who we work with</h2>
            <ul className="mt-4 space-y-3 text-muted md:text-lg">
            <ul className="mt-4 space-y-3 text-muted md:text-lg">
            <li>Homeowners looking for a durable exterior upgrade</li>
            <li>
                Builder and contractor partners in Illinois, including Aloha Construction
                and AGIS
            </li>
            </ul>
            </ul>

            <Link
              to="/contact"
              className="mt-10 inline-block bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
            >
              Start a project
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About