import React from 'react';

const ResForm = (props) => {
  return (
    <form className='reservation-form'>
      <input name='name' type='text' value={props.name} onChange={props.handleChange}></input>
      <input name='date' type='text' value={props.date} onChange={props.handleChange}></input>
      <input name='time' type='text' value={props.time} onChange={props.handleChange}></input>
      <input name='number' type='text' value={props.number} onChange={props.handleChange}></input>
      <button name='submitButton' onClick={props.submitReservation}>Make Reservation</button>
    </form>
  )
}

export default ResForm;