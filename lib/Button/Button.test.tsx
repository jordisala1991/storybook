import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from '@example/Button';

describe('Button test', () => {
  test('Should show label', () => {
    render(<Button label="Testing"></Button>);

    expect(screen.getByText(/Testing/i)).toBeDefined();
  });
});
