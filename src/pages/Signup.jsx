import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Signup flow coming soon.");
  };

  return (
    <>
      <Navbar />

      <div className="form-shell">
        <div className="form-panel">
          <h2>Create your account</h2>
          <p className="text-slate-400 mb-8">
            Join the club portal to manage members, events, and community resources with confidence.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Choose a password"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn-primary w-full mt-2">
              Create account
            </button>
          </form>

          <div className="form-footer">
            <span className="text-slate-400">Already a member?</span>
            <Link to="/login">Login instead</Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Signup;