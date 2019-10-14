// Test away
import React from 'react'
import { render, getByTestId } from '@testing-library/react';
import Dashboard from './Dashboard';


test('dashboard renders', () => {
    render(<Dashboard />)
})

test('defaults to unlocked and open', () => {
    const {getByText} = render(<Dashboard />)
    getByText(/unlocked/i)
    getByText(/open/i)
})
