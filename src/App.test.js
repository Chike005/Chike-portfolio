import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(
  'react-router-dom',
  () => {
    const React = require('react');
    const link = ({ to, children, className, ...props }) =>
      React.createElement(
        'a',
        {
          href: to,
          className: typeof className === 'function' ? className({ isActive: false }) : className,
          ...props,
        },
        children,
      );
    return {
      BrowserRouter: ({ children }) => children,
      Link: link,
      NavLink: link,
      Navigate: () => null,
      Route: () => null,
      Routes: ({ children }) => {
        const homeRoute = React.Children.toArray(children).find(
          (route) => route.props.path === '/',
        );
        return homeRoute ? homeRoute.props.element : null;
      },
    };
  },
  { virtual: true },
);

test('renders portfolio introduction and project link', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /thoughtful software, built for people/i }),
  ).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /explore my work/i }),
  ).toHaveAttribute('href', '/projects');
});
