import React from 'react'
import HomeCard from '../../components/HomeCard'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import './Home.css'
import electriciansImage from '../../assets/illustrations/Electrican.jpg'
import plumbersImage from '../../assets/illustrations/Plumber.jpg'
import carpentersImage from '../../assets/illustrations/Carpenter.jpg'
import appliancesImage from '../../assets/illustrations/Appliances.jpg'
import mechanicImage from '../../assets/illustrations/Mechanic.jpg'
import mainOneImage from '../../assets/illustrations/Main1.jpg'
import masonImage from '../../assets/illustrations/Mason.jpg'

const Home = ({ onServicesClick }) => {
  return (
    <div className='home-page'>
      <Navbar
        onHomeClick={null}
        onServicesClick={onServicesClick}
        user={{
          name: 'Arun Kumar',
          email: 'arun.kumar@email.com',
          phone: '+91 94444 12345',
          location: 'Madurai, TN'
        }}
      />
      <div className='home-container'>
        <div className='home-content'>
          <h1 className='home-title'>Nammul Oruvan</h1>
          <div className='home-subtext'>
            <p>Find Trusted Workers Near You!</p>
            <p>Book electricians, plumbers, carpenters, and other skilled workers in minutes.</p>
          </div>
          <div className='home-illustrations'>
            <img src={mainOneImage} alt='Main illustration' />
          </div>
          <div className='userStats'>
            <h1>
              Trusted by <span className='userStats-number'>3000+</span>
              <span>Users</span> and <span className='userStats-number'>1000+</span>
              <span>Workers</span>
            </h1>
          </div>
          <div className='home-cards'>
            <HomeCard title='Electricians' count='500+' imageSrc={electriciansImage} />
            <HomeCard title='Plumbers' count='300+' imageSrc={plumbersImage} />
            <HomeCard title='Carpenters' count='250+' imageSrc={carpentersImage} />
            <HomeCard title='Electronics Technicians' count='150+' imageSrc={appliancesImage} />
            <HomeCard title='Mechanics' count='150+' imageSrc={mechanicImage} />
            <HomeCard title='Masons' count='150+' imageSrc={masonImage} />
          </div>
          <div className='search-button'>
            <button className='btn' onClick={onServicesClick}>Search Workers</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
