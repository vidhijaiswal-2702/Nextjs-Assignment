
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostDetail from '../components/PostDetail';

const post = { title: 'Sample', content: 'This is a test.' };

test('shows post details and handles close', () => {
  const onClose = jest.fn();
  render(<PostDetail post={post} onClose={onClose} />);
  expect(screen.getByText('Sample')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Close'));
  expect(onClose).toHaveBeenCalled();
});
