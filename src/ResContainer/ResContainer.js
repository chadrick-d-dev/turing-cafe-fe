import React from 'react';

const ResContainer = (props) => {
  const formatReservations = () => {
    return props.reservations.map((reservation) => {
      return (
        <>
          <section className='reservation-card'>
            <p className='resy-name'>{`${reservation.name}`}</p>
            <p className='resy-date'>{`${reservation.date}`}</p>
            <p className='resy-time'>{`${reservation.time}`}</p>
            <p className='resy-count'>Number of guests: {`${reservation.number}`}</p>
            <button className="button cancel-button">Cancel</button>
          </section>
        </>
      )
    })
  }
  if(!props.reservations) {
    return 'Loading';
  }
  return (
    <section className='res-container'>
      {formatReservations()}
    </section>
  )
}

export default ResContainer;