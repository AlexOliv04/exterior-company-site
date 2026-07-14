import { Link } from 'react-router-dom'

function Contractors() {
  return (
    <main className="bg-surface px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-ink md:text-5xl">
          Contractors
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A reliable exterior finishing partner for builders and contractors
          across Illinois.
        </p>

        <div className="mt-14 max-w-3xl space-y-6 text-muted md:text-lg">
          <p>
            We support contractor teams with siding, aluminum wrapping, window
            capping, gutters, exterior finishing, and shutters — so your builds
            stay on schedule and look complete.
          </p>
          <p>
            We’ve worked with partners including{' '}
            <span className="font-semibold text-ink">Aloha Construction</span> and{' '}
            <span className="font-semibold text-ink">AGIS</span> in Illinois.
          </p>
          <p>
            Clear communication, clean installs, and consistent quality on every
            job.
          </p>
        </div>

        <Link
          to="/contact"
          className="mt-12 inline-block bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
        >
          Partner with us
        </Link>
      </div>
    </main>
  )
}

export default Contractors