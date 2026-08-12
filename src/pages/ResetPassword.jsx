import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="hero-card mt-14">
          <div className="hero-badge">Reset password</div>
          <h1 className="hero-heading">Set a new secure password</h1>
          <p className="hero-copy">
            Choose a strong password to keep your account safe and continue using the club portal.
          </p>
        </section>

        <div className="form-shell">
          <div className="form-panel">
            <h2>Create a new password</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="password">New password</label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label htmlFor="confirmPassword">Confirm password</label>
              <input
                id="confirmPassword"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />

              <button type="submit" className="btn-primary w-full mt-4">
                Save new password
              </button>
            </form>
            {submitted && (
              <p className="mt-5 text-slate-300">
                Your password has been updated successfully.
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default ResetPassword;