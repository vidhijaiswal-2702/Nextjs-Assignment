import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PostsPage, { getServerSideProps } from '../pages/posts';

//  Mock global fetch for getServerSideProps
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ id: 1, title: 'Mock Post', content: 'Mock content' }]),
  })
);

//  1. Test getServerSideProps returns mocked posts
test('getServerSideProps returns posts', async () => {
  const result = await getServerSideProps({});
  expect(result).toEqual({
    props: {
      posts: [{ id: 1, title: 'Mock Post', content: 'Mock content' }],
    },
  });
});

// 2. Test loading message when posts array is empty
test('shows loading when posts are empty', () => {
  render(<PostsPage posts={[]} />);
  expect(screen.getByText('Loading posts...')).toBeInTheDocument();
});

// 3. Test that posts render correctly
test('renders post titles and opens/closes modal', () => {
  const posts = [{ id: 1, title: 'Post A', content: 'Details about Post A' }];
  render(<PostsPage posts={posts} />);

  // Open modal by clicking post
  fireEvent.click(screen.getByText('Post A'));
  expect(screen.getByText('Details about Post A')).toBeInTheDocument();

  // Close modal
  fireEvent.click(screen.getByText('Close'));
  expect(screen.queryByText('Details about Post A')).not.toBeInTheDocument();
});
