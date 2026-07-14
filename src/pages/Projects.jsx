import { projects } from '../data/projects'

function Projects() {
  return (
    <main className="bg-surface px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-ink md:text-5xl">Projects</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Recent exterior work across homes in the area.
        </p>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="aspect-[4/3] w-full object-cover"
              />
              <p className="mt-3 text-sm uppercase tracking-wide text-muted">
                {project.category}
              </p>
              <h2 className="mt-1 text-xl font-semibold text-ink">{project.title}</h2>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Projects