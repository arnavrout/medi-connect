import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import ContactUs from "./ContactUs";
import GetInTouch from "./GetInTouch";

function Dashboard() {
  return (
<div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="stats">
        <Stats />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="contact">
        <GetInTouch />
      </section>

      <Footer/>
    </div>

  );
}

export default Dashboard;
