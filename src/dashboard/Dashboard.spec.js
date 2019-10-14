// Test away
import React from 'react'
import { render } from '@testing-library/react';
import Dashboard from './Dashboard';
import Controls from '../controls/Controls';
import Display from '../display/Display';

test('dashboard shows controls', () => {
    render(<Controls />)
})

test('dashboard shows controls', () => {
    render(<Display />)
})