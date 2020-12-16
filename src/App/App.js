import React, { Component } from 'react';
import { getReservations } from '../apiCalls';
import ResContainer from '../ResContainer/ResContainer';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({reservations: reservations}))
  }

  formatReservations() {
    return this.state.reservations.map((reservation) => {
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

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResContainer reservations={this.state.reservations} formatReservations={this.formatReservations} />
        </div>
      </div>
    )
  }
}

export default App;
