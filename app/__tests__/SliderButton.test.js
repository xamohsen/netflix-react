import React from 'react'
import {
  render,
} from '@testing-library/react';
import SliderButton from "../components/SliderButton";

describe('Slider Button Tests', () => {
  test("render the left slider button", async () => {
    const {getByTestId} = render(<SliderButton testId={"left-button"} direction={"left"} onClick={() => {
    }}/>);
    expect(getByTestId('left-button'));
    expect(getByTestId('left-button').classList[0]).toBe('left-slider');
  });

  test("render the right slider button", async () => {
    const {getByTestId} = render(<SliderButton testId={"right-button"} direction={"right"} onClick={() => {
    }}/>);
    expect(getByTestId('right-button'));
    expect(getByTestId('right-button').classList[0]).toBe('right-slider');
  });
});

