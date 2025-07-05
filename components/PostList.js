import React from 'react';

export default function PostList({ posts, onSelect }) {
  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id} onClick={() => onSelect(post)}>
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
