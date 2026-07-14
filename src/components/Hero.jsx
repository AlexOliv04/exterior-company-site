import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const heroImage =
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'

function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      <img
        src={heroImage}
        alt="Finished home exterior with modern siding"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/55" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-24 md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-brand text-4xl text-white md:text-6xl"
        >
          Exterior Co.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 max-w-xl text-2xl font-semibold text-white md:text-3xl"
        >
          Clean, durable exteriors built to last.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-lg text-base text-white/85 md:text-lg"
        >
          Siding, aluminum wrapping, windows, gutters, and finishing — done right.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link
            to="/contact"
            className="inline-block bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
          >
            Request a quote
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero