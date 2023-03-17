import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../Rocket';
import store from '../../redux/store';

describe('Rockets component', () => {
  it('should match to snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rocket />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
