
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostList from '../components/PostList';

const mockPosts = [{ id: 1, title: 'Test Post' }];

test('renders post titles and handles click', () => {
  const onSelect = jest.fn();
  render(<PostList posts={mockPosts} onSelect={onSelect} />);
  const title = screen.getByText('Test Post');
  fireEvent.click(title);
  expect(onSelect).toHaveBeenCalledWith(mockPosts[0]);
});
