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

  async componentDidMount() {
    getReservations()
      .then(reservations => this.setState({reservations: reservations}))
  }


  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <ResContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
