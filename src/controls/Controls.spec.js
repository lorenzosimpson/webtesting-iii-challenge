import React from 'react'
import { render } from '@testing-library/react';

import Controls from './Controls';


test('provides button to toggle locked and closed state', () => {
  const { getByTestId } = render(<Controls />)
  getByTestId('lock-btn')
  getByTestId('close-btn') 
})

test('close button changes to disabled if gate is locked', () => {
  const { getByTestId } = render(<Controls locked={true}/>)
  expect(getByTestId('close-btn').disabled).toBe(true)
})


test('lock changes to disabled if gate is open', () => {
  const { getByTestId } = render(<Controls closed={false}/>)
  expect(getByTestId('lock-btn').disabled).toBe(true)
})