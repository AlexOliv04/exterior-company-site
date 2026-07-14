import { Link } from 'react-router-dom'
import { services } from '../data/services'

function ServicesPreview() {
  return (
    <section className="bg-surface px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-ink md:text-4xl">
          What we build
        </h2>
        <p className="mt-3 max-w-2xl text-muted">
          Full exterior packages and focused upgrades — from siding to finishing details.
        </p>

        <ul className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.id}>
              <h3 className="text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-2 text-muted">{service.description}</p>
            </li>
          ))}
        </ul>

        <Link
          to="/services"
          className="mt-12 inline-block font-semibold text-accent hover:underline"
        >
          View all services
        </Link>
      </div>
    </section>
  )
}

export default ServicesPreview