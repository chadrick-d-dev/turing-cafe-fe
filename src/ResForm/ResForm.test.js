import {render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ResForm from './ResForm';

describe('ResForm', () => {
  let mockHandleChange;
  let mockSubmitReservation;
  beforeEach(() => {
    mockHandleChange = jest.fn();
    mockSubmitReservation = jest.fn();
  })
  it('should render form', () => {
    render(
      <ResForm 
        handleChange= {mockHandleChange}
        name=""
        date=""
        time=""
        number=""
        submitReservation={mockSubmitReservation}
      />
    )

      const submitButton = screen.getByText('Make Reservation');

      expect(submitButton).toBeInTheDocument();
  })

  it('should update input value props on change', () => {
    render(
      <ResForm 
        handleChange= {mockHandleChange}
        name=""
        date=""
        time=""
        number=""
        submitReservation={mockSubmitReservation}
      />
    )
    const nameInput = screen.getByLabelText('Name');

    fireEvent.change(nameInput, { target: { value: 'Chad' } })

    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  })

})