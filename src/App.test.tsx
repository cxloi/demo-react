import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

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

const renderComponent = () => render(<Provider store={mockStore}><App /></Provider>);

describe('App', () => {
  test('"Store State" link will render store state', () => {
    const { getByTestId } = renderComponent();

    fireEvent.click(getByTestId('linkState'));
    const textElement = getByTestId('storeStatePage').textContent;
    expect(textElement).toContain('"userName": "Dan Abramov"');
  });

  test('"Update User Profile" link will render update form', () => {
    const { getByTestId } = renderComponent();

    fireEvent.click(getByTestId('linkUpdate'));
    const textElement = getByTestId('updatePage').textContent;
    expect(textElement).toContain('Update User Profile');
  });
});
