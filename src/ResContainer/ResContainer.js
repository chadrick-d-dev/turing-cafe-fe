import React from 'react';

const ResContainer = (props) => {
  if(!props.reservations) {
    return 'Loading';
  }
  return (
    <section className='res-container'>
      {props.formatReservations}
    </section>
  )
}

export default ResContainer;