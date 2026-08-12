import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="hero-card mt-14">
          <div className="hero-badge">Password recovery</div>
          <h1 className="hero-heading">Forgot your password?</h1>
          <p className="hero-copy">
            Enter your email and we will send a secure reset link so you can update your password.
          </p>
        </section>

        <div className="form-shell">
          <div className="form-panel">
            <h2>Reset password</h2>
            <p className="text-slate-400 mb-6">
              We’ll send a recovery email to the address below.
            </p>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary w-full mt-4">
                Send reset link
              </button>
            </form>
            {submitted && (
              <p className="mt-5 text-slate-300">
                If that email exists, we’ve sent a password reset link.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ForgotPassword;