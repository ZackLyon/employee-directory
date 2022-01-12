import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from '../../context/UserContext.jsx';
import Header from './Header.jsx';

jest.mock('../../context/UserContext.jsx');

it('should display a Log In button if no user is logged in', () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider testUser={{}}>
        <Header />
      </UserProvider>
    </MemoryRouter>
  );

  expect(container).toMatchSnapshot();
});

it("should display a user's email if logged in", () => {
  const { container } = render(
    <MemoryRouter>
      <UserProvider testUser={{ id: '1234', email: 'some@guy.com' }}>
        <Header />
      </UserProvider>
    </MemoryRouter>
  );

  screen.getByText('some@guy.com');
  expect(container).toMatchSnapshot();
});
