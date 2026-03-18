import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import profileImage from "../../assets/illustrations/Profile.jpg";
import "./Services.css";

const workers = [
  {
    id: 1,
    name: "Karthik Selvan",
    work: "Electrician",
    photo: profileImage,
    fee: 450,
    rating: 4.7,
    place: "RS Puram",
    phone: "+91 90001 23456",
    location: "Coimbatore, TN",
    distance: "2.1 km",
  },
  {
    id: 2,
    name: "Meera Devi",
    work: "Plumber",
    photo: profileImage,
    fee: 500,
    rating: 4.5,
    place: "Gandhipuram",
    phone: "+91 90002 34567",
    location: "Coimbatore, TN",
    distance: "3.4 km",
  },
  {
    id: 3,
    name: "Senthil Kumar",
    work: "Carpenter",
    photo: profileImage,
    fee: 600,
    rating: 4.8,
    place: "Peelamedu",
    phone: "+91 90003 45678",
    location: "Coimbatore, TN",
    distance: "1.6 km",
  },
  {
    id: 4,
    name: "Divya Priya",
    work: "Appliance Technician",
    photo: profileImage,
    fee: 550,
    rating: 4.6,
    place: "Saibaba Colony",
    phone: "+91 90004 56789",
    location: "Coimbatore, TN",
    distance: "4.2 km",
  },
  {
    id: 5,
    name: "Ravi Shankar",
    work: "Mechanic",
    photo: profileImage,
    fee: 400,
    rating: 4.4,
    place: "Ukkadam",
    phone: "+91 90005 67890",
    location: "Coimbatore, TN",
    distance: "2.9 km",
  },
  {
    id: 6,
    name: "Lakshmi Narayan",
    work: "Mason",
    photo: profileImage,
    fee: 480,
    rating: 4.3,
    place: "Ramanathapuram",
    phone: "+91 90006 78901",
    location: "Coimbatore, TN",
    distance: "5.1 km",
  },
  {
    id: 7,
    name: "Vijay Anand",
    work: "Electrician",
    photo: profileImage,
    fee: 520,
    rating: 4.6,
    place: "Singanallur",
    phone: "+91 90007 89012",
    location: "Coimbatore, TN",
    distance: "3.0 km",
  },
  {
    id: 8,
    name: "Priya Natarajan",
    work: "Plumber",
    photo: profileImage,
    fee: 470,
    rating: 4.4,
    place: "Kalapatti",
    phone: "+91 90008 90123",
    location: "Coimbatore, TN",
    distance: "6.2 km",
  },
  {
    id: 9,
    name: "Arjun Menon",
    work: "Carpenter",
    photo: profileImage,
    fee: 610,
    rating: 4.7,
    place: "Ganapathy",
    phone: "+91 90009 01234",
    location: "Coimbatore, TN",
    distance: "2.4 km",
  },
  {
    id: 10,
    name: "Keerthana Sri",
    work: "Appliance Technician",
    photo: profileImage,
    fee: 560,
    rating: 4.5,
    place: "Town Hall",
    phone: "+91 90010 12345",
    location: "Coimbatore, TN",
    distance: "1.8 km",
  },
  {
    id: 11,
    name: "Gokul Raj",
    work: "Mechanic",
    photo: profileImage,
    fee: 430,
    rating: 4.2,
    place: "Thudiyalur",
    phone: "+91 90011 23456",
    location: "Coimbatore, TN",
    distance: "7.4 km",
  },
  {
    id: 12,
    name: "Aishwarya Bala",
    work: "Mason",
    photo: profileImage,
    fee: 490,
    rating: 4.3,
    place: "Kavundampalayam",
    phone: "+91 90012 34567",
    location: "Coimbatore, TN",
    distance: "3.7 km",
  },
  {
    id: 13,
    name: "Suresh Kumar",
    work: "Painter",
    photo: profileImage,
    fee: 540,
    rating: 4.6,
    place: "Kovaipudur",
    phone: "+91 90013 45678",
    location: "Coimbatore, TN",
    distance: "5.6 km",
  },
  {
    id: 14,
    name: "Anitha Rajan",
    work: "House Cleaner",
    photo: profileImage,
    fee: 350,
    rating: 4.4,
    place: "Saravanampatti",
    phone: "+91 90014 56789",
    location: "Coimbatore, TN",
    distance: "4.9 km",
  },
  {
    id: 15,
    name: "Bala Subramani",
    work: "AC Technician",
    photo: profileImage,
    fee: 650,
    rating: 4.8,
    place: "Peelamedu",
    phone: "+91 90015 67890",
    location: "Coimbatore, TN",
    distance: "2.2 km",
  },
  {
    id: 16,
    name: "Nithya Krishnan",
    work: "Electrician",
    photo: profileImage,
    fee: 480,
    rating: 4.5,
    place: "Saibaba Colony",
    phone: "+91 90016 78901",
    location: "Coimbatore, TN",
    distance: "4.0 km",
  },
  {
    id: 17,
    name: "Rahul Dev",
    work: "Plumber",
    photo: profileImage,
    fee: 510,
    rating: 4.6,
    place: "RS Puram",
    phone: "+91 90017 89012",
    location: "Coimbatore, TN",
    distance: "2.7 km",
  },
  {
    id: 18,
    name: "Kavya Arun",
    work: "Carpenter",
    photo: profileImage,
    fee: 590,
    rating: 4.4,
    place: "Ukkadam",
    phone: "+91 90018 90123",
    location: "Coimbatore, TN",
    distance: "3.9 km",
  },
  {
    id: 19,
    name: "Manoj Kumar",
    work: "Appliance Technician",
    photo: profileImage,
    fee: 530,
    rating: 4.5,
    place: "Gandhipuram",
    phone: "+91 90019 01234",
    location: "Coimbatore, TN",
    distance: "2.0 km",
  },
  {
    id: 20,
    name: "Sneha Iyer",
    work: "Mechanic",
    photo: profileImage,
    fee: 420,
    rating: 4.3,
    place: "Ramanathapuram",
    phone: "+91 90020 12345",
    location: "Coimbatore, TN",
    distance: "5.3 km",
  },
  {
    id: 21,
    name: "Dinesh Prabhu",
    work: "Mason",
    photo: profileImage,
    fee: 460,
    rating: 4.2,
    place: "Ganapathy",
    phone: "+91 90021 23456",
    location: "Coimbatore, TN",
    distance: "3.1 km",
  },
  {
    id: 22,
    name: "Rohini Bala",
    work: "Painter",
    photo: profileImage,
    fee: 520,
    rating: 4.5,
    place: "Singanallur",
    phone: "+91 90022 34567",
    location: "Coimbatore, TN",
    distance: "2.8 km",
  },
  {
    id: 23,
    name: "Sathish Kumar",
    work: "House Cleaner",
    photo: profileImage,
    fee: 360,
    rating: 4.1,
    place: "Thudiyalur",
    phone: "+91 90023 45678",
    location: "Coimbatore, TN",
    distance: "6.8 km",
  },
  {
    id: 24,
    name: "Meena Ravi",
    work: "AC Technician",
    photo: profileImage,
    fee: 620,
    rating: 4.7,
    place: "Saravanampatti",
    phone: "+91 90024 56789",
    location: "Coimbatore, TN",
    distance: "4.6 km",
  },
  {
    id: 25,
    name: "Karthi Selvam",
    work: "Electrician",
    photo: profileImage,
    fee: 490,
    rating: 4.4,
    place: "Town Hall",
    phone: "+91 90025 67890",
    location: "Coimbatore, TN",
    distance: "1.9 km",
  },
  {
    id: 26,
    name: "Deepa Mohan",
    work: "Plumber",
    photo: profileImage,
    fee: 530,
    rating: 4.6,
    place: "Kovaipudur",
    phone: "+91 90026 78901",
    location: "Coimbatore, TN",
    distance: "5.9 km",
  },
];

const Services = ({ onHomeClick, onServicesClick }) => {
  const [activeWorker, setActiveWorker] = useState(null);
  const [searchLocation, setSearchLocation] = useState("");
  const [maxFee, setMaxFee] = useState("");
  const [minRating, setMinRating] = useState("");

  const closeModal = () => setActiveWorker(null);
  const minRatingValue = minRating ? Number(minRating) : 0;
  const maxFeeValue = maxFee ? Number(maxFee) : Number.POSITIVE_INFINITY;
  const normalizedLocation = searchLocation.trim().toLowerCase();

  const filteredWorkers = workers.filter((worker) => {
    const matchesLocation = normalizedLocation
      ? `${worker.location} ${worker.place}`
          .toLowerCase()
          .includes(normalizedLocation)
      : true;
    const matchesFee = worker.fee <= maxFeeValue;
    const matchesRating = worker.rating >= minRatingValue;
    return matchesLocation && matchesFee && matchesRating;
  });

  return (
    <div className="services-page">
      <Navbar onHomeClick={onHomeClick} onServicesClick={onServicesClick} />
      <div className="services-content">
        <div className="services-header">
          <div>
            <h1>Available Workers</h1>
            <p>{filteredWorkers.length} workers ready to help you today</p>
          </div>
          <div className="services-filters">
            <input
              className="filter-input"
              type="text"
              placeholder="Search location"
              value={searchLocation}
              onChange={(event) => setSearchLocation(event.target.value)}
              aria-label="Search by location"
            />
            <input
              className="filter-input"
              type="number"
              min="0"
              placeholder="Max fee"
              value={maxFee}
              onChange={(event) => setMaxFee(event.target.value)}
              aria-label="Filter by maximum fee"
            />
            <select
              className="filter-input"
              value={minRating}
              onChange={(event) => setMinRating(event.target.value)}
              aria-label="Filter by minimum rating"
            >
              <option value="">Min rating</option>
              <option value="4.0">4.0+</option>
              <option value="4.2">4.2+</option>
              <option value="4.4">4.4+</option>
              <option value="4.6">4.6+</option>
              <option value="4.8">4.8+</option>
            </select>
          </div>
        </div>

        <div className="services-grid">
          {filteredWorkers.map((worker) => (
            <div className="worker-card" key={worker.id}>
              <div className="worker-card-main">
                <h3>{worker.name}</h3>
                <p className="worker-role">{worker.work}</p>
                <div className="worker-rating">
                  <span className="rating-value">
                    {worker.rating.toFixed(1)}{" "}
                    <span className="rating-star">★</span>
                  </span>
                </div>
                <p className="worker-fee">Fee: ₹{worker.fee}</p>
              </div>
              <button
                className="view-more-btn"
                type="button"
                onClick={() => setActiveWorker(worker)}
              >
                View More
              </button>
            </div>
          ))}
        </div>
      </div>

      {activeWorker && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="close-btn" type="button" onClick={closeModal}>
              ×
            </button>
            <div className="modal-carousel">
              {activeWorker.photo ? (
                <img src={activeWorker.photo} alt={`${activeWorker.name} profile`} />
              ) : (
                <div className="carousel-placeholder">
                  <span>Photo Carousel</span>
                </div>
              )}
            </div>

            <div className="modal-header-centered">
              <h2>{activeWorker.name}</h2>
              <p className="worker-role">{activeWorker.work}</p>
            </div>

            <div className="modal-body">
              <div className="modal-table">
                <div className="modal-row">
                  <span className="modal-label">Phone number</span>
                  <span className="modal-value">{activeWorker.phone}</span>
                </div>
                <div className="modal-row">
                  <span className="modal-label">Address</span>
                  <span className="modal-value">
                    {activeWorker.place}, {activeWorker.location}
                  </span>
                </div>
                <div className="modal-row">
                  <span className="modal-label">Distance</span>
                  <span className="modal-value">
                    {activeWorker.distance} away
                  </span>
                </div>
                <div className="modal-row">
                  <span className="modal-label">Service Rating</span>
                  <span className="modal-value">
                    {activeWorker.rating.toFixed(1)} ★
                  </span>
                </div>
                <div className="modal-row">
                  <span className="modal-label">Base Fee</span>
                  <span className="modal-value">₹{activeWorker.fee}</span>
                </div>
              </div>
              <button className="primary-btn" type="button">
                Book Worker
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Services;
