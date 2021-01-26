import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import StoreState from './StoreState';

const mockState = {
  count: 1,
  user: {
    isLoggedIn: true,
    userDetails: {
      userName: 'Dan Abramov',
      age: 38,
    },
  },
};
const mockStore = configureStore([])(mockState);

const renderComponent = () => render(<Provider store={mockStore}><StoreState /></Provider>);

describe('StoreState', () => {
  it('should render the whole store', () => {
    const { getByTestId } = renderComponent();
    const textElement = getByTestId('storeStatePage').textContent;
    expect(textElement).toContain('"count": 1,');
    expect(textElement).toContain('"userName": "Dan Abramov"');
    expect(textElement).toContain('"age": 38');
  });
});
