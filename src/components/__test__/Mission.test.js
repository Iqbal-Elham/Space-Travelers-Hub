import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Missions from '../../routes/Missions';

jest.mock('../../redux/missions/missionsSlice', () => ({
  __esModule: true,
  fetchMissions: jest.fn(),
  joinMission: jest.fn(),
  leaveMission: jest.fn(),
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Missions', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      missions: {
        missions: [
          {
            mission_id: '8',
            mission_name: 'let this is name of tested mission',
            description: 'Description of A mission for testing',
            joined: false,
          },
        ],
        isLoading: false,
      },
    });
  });

  it('should render missions', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    expect(getByText('Missions')).toBeInTheDocument();
    expect(getByText('Description')).toBeInTheDocument();
    expect(getByText('Status')).toBeInTheDocument();
    expect(getByText('let this is name of tested mission')).toBeInTheDocument();
    expect(getByText('Description of A mission for testing')).toBeInTheDocument();
  });
});
