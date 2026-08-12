import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const [profile, setProfile] = useState({
    name: "Alex Johnson",
    email: "alex@clubbuilder.com",
    role: "Club Organizer",
    bio: "Building member experiences with events and communication tools.",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    alert("Profile saved.");
  };

  return (
    <>
      <Navbar />
      <main className="page-shell">
        <section className="hero-card mt-14">
          <div className="hero-badge">Your profile</div>
          <h1 className="hero-heading">Member profile settings</h1>
          <p className="hero-copy">
            Update your account details, role information, and public profile details for the club portal.
          </p>
        </section>

        <div className="profile-grid">
          <div className="profile-panel">
            <h2>Account details</h2>
            <form onSubmit={handleSave}>
              <div className="profile-field">
                <label htmlFor="name">Full name</label>
                <input id="name" name="name" value={profile.name} onChange={handleChange} />
              </div>

              <div className="profile-field">
                <label htmlFor="email">Email address</label>
                <input id="email" name="email" value={profile.email} onChange={handleChange} />
              </div>

              <div className="profile-field">
                <label htmlFor="role">Role</label>
                <input id="role" name="role" value={profile.role} onChange={handleChange} />
              </div>

              <div className="profile-field">
                <label htmlFor="bio">Bio</label>
                <input id="bio" name="bio" value={profile.bio} onChange={handleChange} />
              </div>

              <button type="submit" className="btn-primary mt-2">
                Save profile
              </button>
            </form>
          </div>

          <div className="action-card">
            <h3>Profile overview</h3>
            <p>Keep your information up-to-date and ensure club members see the right details when reviewing your account.</p>
            <div className="action-row">
              <span className="status-chip">Member since 2024</span>
              <span className="status-chip">Verified organizer</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Profile;