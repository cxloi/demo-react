import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { userUpdateDetails } from '../redux/actions/userActions';
import UpdateUserProfile from './UpdateUserProfile';

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

const renderComponent = () => render(<Provider store={mockStore}><UpdateUserProfile /></Provider>);

describe('UpdateUserProfile', () => {
  test('"render update form', () => {
    const { getByTestId } = renderComponent();
    const textElement = getByTestId('updatePage').textContent;
    expect(textElement).toContain('User Name:');
    expect(textElement).toContain('Age:');
    expect(textElement).toContain('Submit');
  });

  test('Update action dispatch to store correctly', () => {
    const action = userUpdateDetails({ userName: 'Michael', age: 40 });
    mockStore.dispatch(action);

    const actions = mockStore.getActions();
    expect(actions).toEqual([action]);
  });
});
