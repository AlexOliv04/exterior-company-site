import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="bg-surface px-4 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold text-ink md:text-5xl">Contact</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          Tell us about your project. We’ll follow up to schedule a quote.
        </p>

        {submitted ? (
          <p className="mt-14 max-w-xl text-lg text-ink">
            Thanks — your message was received. We’ll be in touch soon.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-14 grid max-w-xl gap-6"
          >
            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Name</span>
              <input
                type="text"
                name="name"
                required
                className="border border-slate-300 bg-white px-3 py-2 text-ink outline-none focus:border-accent"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Email</span>
              <input
                type="email"
                name="email"
                required
                className="border border-slate-300 bg-white px-3 py-2 text-ink outline-none focus:border-accent"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Phone</span>
              <input
                type="tel"
                name="phone"
                className="border border-slate-300 bg-white px-3 py-2 text-ink outline-none focus:border-accent"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-medium text-ink">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                className="border border-slate-300 bg-white px-3 py-2 text-ink outline-none focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="justify-self-start bg-accent px-6 py-3 font-semibold text-white hover:brightness-110"
            >
              Send message
            </button>
          </form>
        )}
      </div>
    </main>
  )
}

export default Contact