import { render , screen} from '@testing-library/react';
import Home from './Home';

test('renders home and find search box', async () => {
   render(<Home />);
  const search = screen.getAllByPlaceholderText('Buscar')
  expect(search.length).toBe(1)
});