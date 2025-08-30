import React,  {useState} from 'react'
import './GetInTouch.css'

const GetInTouch = () => {
    const [formData, setFormData] = useState({
name: "",
department: "",
email: "",
phone: "",
comments: ""
});


const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};


const handleSubmit = (e) => {
e.preventDefault();
console.log("Submitted Data:", formData);
alert("Form Submitted Successfully!");
setFormData({ name: "", department: "", email: "", phone: "", comments: "" });
};
  return (
    <div className="connect-section">
      <h2 className="connect-title">Connect With Us</h2>
      <div className="connect-container">
        {/* Left Side - Dummy Map */}
        <div className="map-section">
          <iframe
            title="Dummy Map"
            src="https://maps.google.com/maps?q=india&t=&z=5&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>

        {/* Right Side - Patient Form */}
       <div className="form-section">
        <form onSubmit={handleSubmit}>
          {/* Row 1: Name & Department */}
          <div className="form-row">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Department</label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department"
                required
              />
            </div>
          </div>

          {/* Row 2: Email & Phone */}
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>

          {/* Row 3: Comments (Full Width) */}
          <div className="form-group">
            <label>Comments</label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              placeholder="Write about your disease"
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default GetInTouch
