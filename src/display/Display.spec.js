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

        // Render test
    test('display renders correctly', () => {
        render(<Display />)
    })

    test('closed is false by default', () => {
        const expected = false;
        const actual = Display.defaultProps.closed;
        expect(expected).toBe(actual)
    })

    test('locked is false by default', () => {
        const expected = false;
        const actual = Display.defaultProps.locked;
        expect(expected).toBe(actual)
    })

    test('displays if gate is closed', () => {
        const {getByText} = render(<Display closed={true}/>)
        getByText(/^closed/i)
    })

    test('displays if gate is open', () => {
        const {getByText} = render(<Display closed={false}/>)
        getByText(/^open/i)
    })

    test('displays Locked if locked prop is true', () => {
        const {getByText} = render(<Display locked={true}/>)
        getByText(/^locked/i)
    })

    test('displays Unlocked if locked prop is true', () => {
        const {getByText} = render(<Display locked={false}/>)
        getByText(/^unlocked/i)
    })

    test('class should be red-led when locked', () => {
        const { getByTestId } = render(<Display locked={true}/>)
        expect(getByTestId('display-locked').classList.contains('red-led')).toBe(true);
    })

    test('class should be red-led when closed', () => {
        const { getByTestId } = render(<Display closed={true}/>)
        expect(getByTestId('display-closed').classList.contains('red-led')).toBe(true);
    })

    test('class should be green-led when unlocked', () => {
        const { getByTestId } = render(<Display locked={false}/>)
        expect(getByTestId('display-locked').classList.contains('green-led')).toBe(true);
    })

    test('class should be green-led when open', () => {
        const { getByTestId } = render(<Display closed={false}/>)
        expect(getByTestId('display-closed').classList.contains('green-led')).toBe(true);
    })
})

