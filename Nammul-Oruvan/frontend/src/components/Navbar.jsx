import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'

const defaultUser = {
  name: 'Guest User',
  email: 'guest@nammuloruvan.com',
  phone: '+91 98765 43210',
  location: 'Coimbatore, TN'
}

const Navbar = ({ user = defaultUser, onHomeClick, onServicesClick }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const profileRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setIsProfileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const initials = user.name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <div className='app-icon'>
          <span>NO</span>
        </div>
      </div>

      <div className='navbar-right'>
        <button type='button' className='nav-link' onClick={onHomeClick}>
          Home
        </button>
        <button type='button' className='nav-link' onClick={onServicesClick}>
          Services
        </button>
        <button type='button' className='nav-link'>
          My Bookings
        </button>

        <div className='profile-wrapper' ref={profileRef}>
          <button
            type='button'
            className='profile-button'
            aria-haspopup='true'
            aria-expanded={isProfileOpen}
            onClick={() => setIsProfileOpen((prev) => !prev)}
          >
            <span className='profile-initials'>{initials}</span>
          </button>

          {isProfileOpen && (
            <div className='profile-card'>
              <div className='profile-header'>
                <div className='profile-avatar'>{initials}</div>
                <div>
                  <p className='profile-name'>{user.name}</p>
                  <p className='profile-sub'>{user.location}</p>
                </div>
              </div>
              <div className='profile-details'>
                <p><span>Email:</span> {user.email}</p>
                <p><span>Phone:</span> {user.phone}</p>
              </div>
              <button type='button' className='profile-action'>
                View Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
