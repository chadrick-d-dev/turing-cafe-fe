import {render, screen, fireEvent, waitFor } from '@testing-library/react';
import 'testing-library/jest-dom';
import ResForm from './ResForm';

describe('ResForm', () => {
  it('should render form', () => {
    render(
      <ResForm />
    )
  })
})