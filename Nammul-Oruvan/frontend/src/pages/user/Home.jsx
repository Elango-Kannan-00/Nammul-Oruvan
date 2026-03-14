import React from 'react'
import HomeCard from '../../components/HomeCard'
import './Home.css'
import electriciansImage from '../../assets/illustrations/Electrican.jpg'
import plumbersImage from '../../assets/illustrations/Plumber.jpg'
import carpentersImage from '../../assets/illustrations/Carpenter.jpg'
import appliancesImage from '../../assets/illustrations/Appliances.jpg'

const Home = () => {
  return (
    <div className='home-container'>
        <div className='home-content'>
            <h1>Nammul Oruvan</h1>
            <div className='home-cards'>
              <HomeCard title='Electricians' count='500+' imageSrc={electriciansImage} />
              <HomeCard title='Plumbers' count='300+' imageSrc={plumbersImage} />
              <HomeCard title='Carpenters' count='250+' imageSrc={carpentersImage} />
              <HomeCard title='Appliances' count='150+' imageSrc={appliancesImage} />
            </div>
        </div>
    </div>
  )
}

export default Home
