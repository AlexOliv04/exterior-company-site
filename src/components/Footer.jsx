function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Exterior Co. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer