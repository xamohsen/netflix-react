import React from 'react'
import {
  render,
} from '@testing-library/react';
import Card from "../components/Card";

test("render the CarouseSlide with 3 Pages", async () => {
  const {getByTestId} = render(<Card image={"../../../public/slide1"}
                                            isActive={true}
                                            testid={"card-0"}/>);
  expect(getByTestId('card-0'));
});

