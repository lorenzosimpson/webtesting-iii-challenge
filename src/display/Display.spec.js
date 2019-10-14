// Test away!
import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';


// Snapshot 
describe('<Display />', () => {
    it('should match snapshot', () => {
        const tree = render(<Display />);
        expect(tree).toMatchSnapshot();
    })
})

// Render test
test('display renders correctly', () => {
    render(<Display />)
})