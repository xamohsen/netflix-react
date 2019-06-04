import React from 'react'
import renderer from 'react-test-renderer';
import {
  render,
  waitForElement,
} from '@testing-library/react';
import App from "../components/App";

test.skip('App component snapshot', () => {
  const component = renderer.create(<App/>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test.skip('renders hello world text', async () => {
  const {getByText} = render(<App/>);
  await waitForElement(() => getByText(/Hello World/));
});