import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <section className="stats">
      <div className="stats-container">
        <div className="stat center-tagline">
          <h2>India’s Most Grown Online Hospital App</h2>
        </div>

        <div className="all-stats-wrap">
          <div className="stat">
            <img
              src="https://img.icons8.com/color/96/doctor-male.png"
              alt="Doctors Registered"
            />
            <h2>500+</h2>
            <p>Doctors Registered</p>
          </div>

          <div className="stat">
            <img
              src="https://img.icons8.com/color/96/stopwatch.png"
              alt="Quickest Time"
            />
            <h2>30s</h2>
            <p>Quickest Solution</p>
          </div>

          <div className="stat">
            <img
              src="https://img.icons8.com/color/96/planner.png"
              alt="Appointments Booked"
            />
            <h2>50k+</h2>
            <p>Appointments Booked</p>
          </div>

          <div className="stat">
            <img
              src="https://img.icons8.com/color/96/headset.png"
              alt="24/7 Support"
            />
            <h2>24/7</h2>
            <p>Support Availability</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Stats;
