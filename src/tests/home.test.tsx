import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home Page', () => {
  it('renders homepage component', () => {
    render(<Home />);
    expect(screen.getByText(/next/i)).toBeInTheDocument();
  });
});