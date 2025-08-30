import React from "react";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-container">
        
        <div className="service-card">
          <img src="https://img.icons8.com/color/96/video-call.png" alt="Online Video Checkup" />
          <h3>Online Video Checkup</h3>
          <p>Consult top doctors instantly through secure video calls.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/pill.png" alt="Fast Medicine Order" />
          <h3>Fast Medicine Order</h3>
          <p>Get your medicines delivered quickly at your doorstep.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/chat.png" alt="Chat with Doctors" />
          <h3>Chat with Doctor</h3>
          <p>Talk to doctors anytime for instant health advice.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/calendar.png" alt="Book Appointment" />
          <h3>Book Fast Appointment</h3>
          <p>Book your doctor’s appointment in seconds hassle-free.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/ambulance.png" alt="Emergency Support" />
          <h3>Emergency Support</h3>
          <p>24/7 ambulance and emergency medical support.</p>
        </div>

        <div className="service-card">
          <img src="https://img.icons8.com/color/96/health-checkup.png" alt="Health Checkup Plans" />
          <h3>Health Checkup Plans</h3>
          <p>Affordable health packages for your family’s wellness.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
