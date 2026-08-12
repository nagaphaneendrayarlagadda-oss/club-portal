import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="hero-card mt-14">
          <div className="hero-badge">Dashboard</div>
          <h1 className="hero-heading">Club dashboard for members and organizers</h1>
          <p className="hero-copy">
            Track attendance, manage upcoming events, and review member activity all from one polished workspace.
          </p>
        </section>

        <div className="dashboard-grid">
          <article className="dashboard-card">
            <h3>Active members</h3>
            <p>See how many members are currently engaged and who has joined in the last 30 days.</p>
          </article>

          <article className="dashboard-card">
            <h3>Upcoming events</h3>
            <p>View scheduled club events, RSVPs, and planning details in a single card layout.</p>
          </article>

          <article className="dashboard-card">
            <h3>Chat activity</h3>
            <p>Monitor conversation volume and respond quickly using the new live chat workspace.</p>
          </article>
        </div>

        <div className="dashboard-grid mt-6">
          <article className="action-card">
            <h3>Manage team roles</h3>
            <p>Easily assign officer roles, approve new members, and keep club leadership aligned.</p>
          </article>

          <article className="action-card">
            <h3>Announcements</h3>
            <p>Publish quick updates to the entire club and keep members informed with one tap.</p>
          </article>

          <article className="action-card">
            <h3>Reports</h3>
            <p>Export member progress, event attendance, and participation insights whenever you need them.</p>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;