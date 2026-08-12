import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="page-shell py-6">
      <nav className="glass-panel flex flex-wrap items-center justify-between gap-4 px-6 py-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white">
            Club Member Portal
          </h2>
          <p className="text-sm text-slate-300 mt-1">AWS Student Builder Groups</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-100">
          <Link to="/" className="transition hover:text-white">
            Home
          </Link>
          <Link to="/chat" className="transition hover:text-white">
            Chat
          </Link>
          <Link to="/login" className="transition hover:text-white">
            Login
          </Link>
          <Link to="/signup" className="transition hover:text-white">
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;