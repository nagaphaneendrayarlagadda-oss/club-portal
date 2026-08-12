import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main className="page-shell">
        <section className="hero-card mt-14">
          <span className="hero-badge">AWS Student Builder • Modern Portal</span>
          <h1 className="hero-heading">
            Build smarter club experiences with polished member tools.
          </h1>
          <p className="hero-copy">
            Host events, manage teams, and keep members engaged from one sleek dashboard. Professional visual polish, fast interactions, and trusted sign-in workflows make your portal feel like a premium product.
          </p>

          <div className="cta-group">
            <Link to="/signup" className="btn-primary">
              Create your account
            </Link>
            <Link to="/login" className="btn-secondary">
              Member login
            </Link>
          </div>

          <div className="feature-grid mt-10">
            <article className="feature-card">
              <h3>Fast onboarding</h3>
              <p>Sign up and get access to the full member dashboard in seconds with a smooth login flow.</p>
            </article>
            <article className="feature-card">
              <h3>Live club tools</h3>
              <p>Track events, message members, and manage club resources through an intuitive interface.</p>
            </article>
            <article className="feature-card">
              <h3>Professional feel</h3>
              <p>Modern gradients, hover motion, and a refined layout make the portal look polished across devices.</p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;