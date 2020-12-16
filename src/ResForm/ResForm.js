import React from 'react';

const ResForm = (props) => {
  return (
    <form className='reservation-form'>
      <label for='name-input'>Name</label>
      <input id='name-input' name='name' type='text' value={props.name} onChange={props.handleChange}></input>
      <label for='date-input'>Date</label>
      <input id='date-input' name='date' type='text' value={props.date} onChange={props.handleChange}></input>
      <label for='time-input'>Time</label>
      <input id='time-input' name='time' type='text' value={props.time} onChange={props.handleChange}></input>
      <label for='number-input'>Number</label>
      <input id='number-input' name='number' type='text' value={props.number} onChange={props.handleChange}></input>
      <button name='submitButton' onClick={props.submitReservation}>Make Reservation</button>
    </form>
  )
}

export default ResForm;