import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './Services.css'

const workers = [
  {
    id: 1,
    name: 'Karthik Selvan',
    work: 'Electrician',
    rating: 4.7,
    place: 'RS Puram',
    phone: '+91 90001 23456',
    location: 'Coimbatore, TN',
    distance: '2.1 km'
  },
  {
    id: 2,
    name: 'Meera Devi',
    work: 'Plumber',
    rating: 4.5,
    place: 'Gandhipuram',
    phone: '+91 90002 34567',
    location: 'Coimbatore, TN',
    distance: '3.4 km'
  },
  {
    id: 3,
    name: 'Senthil Kumar',
    work: 'Carpenter',
    rating: 4.8,
    place: 'Peelamedu',
    phone: '+91 90003 45678',
    location: 'Coimbatore, TN',
    distance: '1.6 km'
  },
  {
    id: 4,
    name: 'Divya Priya',
    work: 'Appliance Technician',
    rating: 4.6,
    place: 'Saibaba Colony',
    phone: '+91 90004 56789',
    location: 'Coimbatore, TN',
    distance: '4.2 km'
  },
  {
    id: 5,
    name: 'Ravi Shankar',
    work: 'Mechanic',
    rating: 4.4,
    place: 'Ukkadam',
    phone: '+91 90005 67890',
    location: 'Coimbatore, TN',
    distance: '2.9 km'
  },
  {
    id: 6,
    name: 'Lakshmi Narayan',
    work: 'Mason',
    rating: 4.3,
    place: 'Ramanathapuram',
    phone: '+91 90006 78901',
    location: 'Coimbatore, TN',
    distance: '5.1 km'
  }
]

const Services = ({ onHomeClick, onServicesClick }) => {
  const [activeWorker, setActiveWorker] = useState(null)

  const closeModal = () => setActiveWorker(null)

  return (
    <div className='services-page'>
      <Navbar onHomeClick={onHomeClick} onServicesClick={onServicesClick} />
      <div className='services-header'>
        <h1>Available Workers</h1>
        <p>{workers.length} workers ready to help you today</p>
      </div>

      <div className='services-grid'>
        {workers.map((worker) => (
          <div className='worker-card' key={worker.id}>
            <div className='worker-card-main'>
              <h3>{worker.name}</h3>
              <p className='worker-role'>{worker.work}</p>
              <div className='worker-rating'>
                <span className='stars'>★★★★★</span>
                <span className='rating-value'>{worker.rating.toFixed(1)}</span>
              </div>
            </div>
            <button
              className='view-more-btn'
              type='button'
              onClick={() => setActiveWorker(worker)}
            >
              View More
            </button>
          </div>
        ))}
      </div>

      {activeWorker && (
        <div className='modal-backdrop' onClick={closeModal}>
          <div className='modal-card' onClick={(event) => event.stopPropagation()}>
            <div className='modal-header'>
              <div>
                <h2>{activeWorker.name}</h2>
                <p>{activeWorker.work}</p>
              </div>
              <button className='close-btn' type='button' onClick={closeModal}>
                ×
              </button>
            </div>

            <div className='modal-grid'>
              <div>
                <h4>Contact</h4>
                <p>{activeWorker.phone}</p>
                <p>{activeWorker.location}</p>
              </div>
              <div>
                <h4>Service Area</h4>
                <p>{activeWorker.place}</p>
                <p>{activeWorker.distance} away</p>
              </div>
              <div>
                <h4>Rating</h4>
                <p>{activeWorker.rating.toFixed(1)} / 5</p>
                <div className='stars large'>★★★★★</div>
              </div>
            </div>

            <button className='primary-btn' type='button'>
              Book Worker
            </button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  )
}

export default Services
