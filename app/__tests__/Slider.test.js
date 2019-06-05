import React from 'react'
import {
  render,
} from '@testing-library/react';
import Slider from "../components/Slider";

test("render the CarouseSlide with 3 Pages", async () => {
  const {getByTestId} = render(<Slider cards={[1,2,3]}/>);
  expect(getByTestId('item-0'));
  expect(getByTestId('item-1'));
  expect(getByTestId('item-2'));
});

