import React from 'react'
import renderer from 'react-test-renderer';
import {
  render,
  waitForElement,
} from '@testing-library/react';
import Navbar from "../components/Navbar";

test("render the Navbar with 3 links", async () => {
  const {getByText} = render(<Navbar/>);
  await waitForElement(() => getByText(/Home/));
  await waitForElement(() => getByText(/TV Shows/));
  await waitForElement(() => getByText(/Movies/));
});

