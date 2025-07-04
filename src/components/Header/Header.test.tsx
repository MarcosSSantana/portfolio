import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Header, { type HeaderProps } from './Header';

describe('Header', () => {
  const mockProps : HeaderProps = {
    name: 'João Silva',
    email: 'joao@email.com',
  };

  it('should render the name correctly', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText('João Silva')).toBeDefined();
  });

      it('should render the email correctly', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText('joao@email.com')).toBeDefined();
  });
});