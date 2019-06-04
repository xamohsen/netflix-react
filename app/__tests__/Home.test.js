import React from 'react'
import {
  render,
} from '@testing-library/react';
import MainView from "../components/MainView";

test("render the CarouseSlide with 3 Pages", async () => {
  const {getByTestId} = render(<MainView image={"../../../public/slide1"}
                                         testid={"card-0"}/>);
  expect(getByTestId('card-0'));
});

