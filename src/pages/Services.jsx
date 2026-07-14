import { Link } from 'react-router-dom'
import { services } from '../data/services'

function Services() {
  return (
    <main className="bg-surface px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-ink md:text-5xl">Services</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Exterior work done cleanly — from full siding jobs to finishing details.
        </p>

        <ul className="mt-14 space-y-12 border-t border-slate-300 pt-12">
          {services.map((service) => (
            <li
              key={service.id}
              className="grid gap-2 border-b border-slate-300 pb-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] md:gap-10"
            >
              <h2 className="text-2xl font-semibold text-ink">{service.title}</h2>
              <p className="text-muted md:text-lg">{service.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <Link
            to="/contact"
            className="inline-block bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
          >
            Request a quote
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Services