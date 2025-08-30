import React, { useState, useEffect } from "react";
import "./ContactUs.css";

function ContactUs() {
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  // Fetch states when component loads
  useEffect(() => {
    const fetchStates = async () => {
      setLoadingStates(true);
      try {
        const response = await fetch("https://indian-cities-api-nocbegfhqg.now.sh/cities");
        const data = await response.json();
        setStates(data.states); // Assume API returns { states: ["Maharashtra", "Gujarat", ...] }
      } catch (error) {
        console.error("Error fetching states:", error);
      } finally {
        setLoadingStates(false);
      }
    };
    fetchStates();
  }, []);

  // Fetch cities when a state is selected
  const handleStateChange = async (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
    if (!state) return;

    setLoadingCities(true);
    try {
      const response = await fetch(`https://indian-cities-api-nocbegfhqg.now.sh/cities?state=Maharashtra`);
      const data = await response.json();
      setCities(data.cities); // Assume API returns { cities: ["Mumbai", "Pune", ...] }
    } catch (error) {
      console.error("Error fetching cities:", error);
    } finally {
      setLoadingCities(false);
    }
  };

  const handleSearch = () => {
    alert(`You selected: ${selectedState}, ${selectedCity}`);
  };

  return (
    <section className="contact-us">
      <h2>Contact Us</h2>

      <div className="wrap-contact-form">
      <div className="contact-form">
        {/* State Dropdown */}
        <select value={selectedState} onChange={handleStateChange}>
          <option value="">{loadingStates ? "Loading States..." : "Select State"}</option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>

        {/* City Dropdown */}
        <select
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          disabled={!selectedState}
        >
          <option value="">
            {loadingCities ? "Loading Cities..." : "Select City"}
          </option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <button onClick={handleSearch} disabled={!selectedCity}>
          Search
        </button>
      </div>
    </div>
    </section>
  );
}

export default ContactUs;
