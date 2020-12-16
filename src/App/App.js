import React, { Component } from 'react';
import { getReservations } from '../apiCalls';
import ResContainer from '../ResContainer/ResContainer';
import ResForm from '../ResForm/ResForm';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
      name: "",
      date: "",
      time: "",
      number: ""
    }
  }

  async componentDidMount() {
    getReservations()
      .then(reservations => this.setState({reservations: reservations}))
  }
  
  handleChange = (event) => {
    let nameValue = event.target.name;
    this.setState({[nameValue]: event.target.value});
  }

  submitReservation = (event) => {
    event.preventDefault()
    if (this.state.name.length > 0 && this.state.date.length > 0 && this.state.time.length > 0 && this.state.number.length > 0) {
      return this.setState({reservations: [...this.state.reservations, {
        id: Date.now(),
        name: this.state.name,
        date: this.state.date,
        time: this.state.time,
        number: this.state.number
      }]})
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <ResForm handleChange={this.handleChange} name={this.state.name} date={this.state.date} time={this.state.time} number={this.state.number} submitReservation={this.submitReservation} />
        </div>
        <div className='resy-container'>
          <ResContainer reservations={this.state.reservations} />
        </div>
      </div>
    )
  }
}

export default App;
