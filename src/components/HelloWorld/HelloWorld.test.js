import React from 'react'
import { HelloWorld } from './HelloWorld';
import { render, screen } from '@testing-library/react';

test('Renders learn react link', () => {
  render( <HelloWorld /> );
  const linkElement =  screen.getByText(/Hello World/i);
  expect(linkElement).toBeInTheDocument();
})
