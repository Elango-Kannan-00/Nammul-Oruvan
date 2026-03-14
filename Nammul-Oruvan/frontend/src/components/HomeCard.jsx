import React from 'react'

const HomeCard = ({ title, count, imageSrc }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <img className='card-image' src={imageSrc} alt={title} />
        <h2 className='card-count'>{count}</h2>
        <p className='card-title'>{title}</p>
      </div>
    </div>
  )
}

export default HomeCard
