import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  const {container} = render(<App />);
  const boxes = container.getElementsByClassName('App');
  expect(boxes.length).toBe(1);
});
