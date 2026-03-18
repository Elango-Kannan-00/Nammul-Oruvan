import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './Services.css'

const workers = [
  {
    id: 1,
    name: 'Karthik Selvan',
    work: 'Electrician',
    fee: 450,
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
    fee: 500,
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
    fee: 600,
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
    fee: 550,
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
    fee: 400,
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
    fee: 480,
    rating: 4.3,
    place: 'Ramanathapuram',
    phone: '+91 90006 78901',
    location: 'Coimbatore, TN',
    distance: '5.1 km'
  }
]

const Services = ({ onHomeClick, onServicesClick }) => {
  const [activeWorker, setActiveWorker] = useState(null)
  const [searchLocation, setSearchLocation] = useState('')
  const [maxFee, setMaxFee] = useState('')
  const [minRating, setMinRating] = useState('')

  const closeModal = () => setActiveWorker(null)
  const minRatingValue = minRating ? Number(minRating) : 0
  const maxFeeValue = maxFee ? Number(maxFee) : Number.POSITIVE_INFINITY
  const normalizedLocation = searchLocation.trim().toLowerCase()

  const filteredWorkers = workers.filter((worker) => {
    const matchesLocation = normalizedLocation
      ? `${worker.location} ${worker.place}`.toLowerCase().includes(normalizedLocation)
      : true
    const matchesFee = worker.fee <= maxFeeValue
    const matchesRating = worker.rating >= minRatingValue
    return matchesLocation && matchesFee && matchesRating
  })

  return (
    <div className='services-page'>
      <Navbar onHomeClick={onHomeClick} onServicesClick={onServicesClick} />
      <div className='services-content'>
        <div className='services-header'>
          <div>
            <h1>Available Workers</h1>
            <p>{filteredWorkers.length} workers ready to help you today</p>
          </div>
          <div className='services-filters'>
            <input
              className='filter-input'
              type='text'
              placeholder='Search location'
              value={searchLocation}
              onChange={(event) => setSearchLocation(event.target.value)}
              aria-label='Search by location'
            />
            <input
              className='filter-input'
              type='number'
              min='0'
              placeholder='Max fee'
              value={maxFee}
              onChange={(event) => setMaxFee(event.target.value)}
              aria-label='Filter by maximum fee'
            />
            <select
              className='filter-input'
              value={minRating}
              onChange={(event) => setMinRating(event.target.value)}
              aria-label='Filter by minimum rating'
            >
              <option value=''>Min rating</option>
              <option value='4.0'>4.0+</option>
              <option value='4.2'>4.2+</option>
              <option value='4.4'>4.4+</option>
              <option value='4.6'>4.6+</option>
              <option value='4.8'>4.8+</option>
            </select>
          </div>
        </div>

        <div className='services-grid'>
          {filteredWorkers.map((worker) => (
            <div className='worker-card' key={worker.id}>
              <div className='worker-card-main'>
                <h3>{worker.name}</h3>
                <p className='worker-role'>{worker.work}</p>
                <div className='worker-rating'>
                  <span className='rating-value'>
                    {worker.rating.toFixed(1)} <span className='rating-star'>★</span>
                  </span>
                </div>
                <p className='worker-fee'>Fee: ₹{worker.fee}</p>
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
      </div>

      {activeWorker && (
        <div className='modal-backdrop' onClick={closeModal}>
          <div className='modal-card' onClick={(event) => event.stopPropagation()}>
            <button className='close-btn' type='button' onClick={closeModal}>
              ×
            </button>
            <div className='modal-carousel'>
              {/* Placeholder for Photo Carousel */}
              <div className='carousel-placeholder'>
                <span>Photo Carousel</span>
              </div>
            </div>

            <div className='modal-header-centered'>
              <h2>{activeWorker.name}</h2>
              <p className='worker-role'>{activeWorker.work}</p>
            </div>

            
            <div className='modal-body'>
              <div className='modal-table'>
                <div className='modal-row'>
                  <span className='modal-label'>Phone number</span>
                  <span className='modal-value'>{activeWorker.phone}</span>
                </div>
                <div className='modal-row'>
                  <span className='modal-label'>Address</span>
                  <span className='modal-value'>{activeWorker.place}, {activeWorker.location}</span>
                </div>
                <div className='modal-row'>
                  <span className='modal-label'>Distance</span>
                  <span className='modal-value'>{activeWorker.distance} away</span>
                </div>
                <div className='modal-row'>
                  <span className='modal-label'>Service Rating</span>
                  <span className='modal-value'>{activeWorker.rating.toFixed(1)} ★</span>
                </div>
                <div className='modal-row'>
                  <span className='modal-label'>Base Fee</span>
                  <span className='modal-value'>₹{activeWorker.fee}</span>
                </div>
              </div>
            <button className='primary-btn' type='button'>
              Book Worker
            </button>
          </div>
        </div>
      </div>
      )}
      <Footer />
    </div>
  )
}

export default Services;
