import React from 'react'
import {
  render,
} from '@testing-library/react';
import CardContent from "../components/CardContent";

test("render the CarouseSlide with 3 Pages", async () => {
  const {getByTestId} = render(<CardContent/>);
  expect(getByTestId('left'));
  expect(getByTestId('right'));
});

