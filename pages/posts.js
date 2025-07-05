// pages/posts.js
import React, { useState } from 'react';
import PostList from '../components/PostList';
import PostDetail from '../components/PostDetail';

export default function PostsPage({ posts }) {
  const [selectedPost, setSelectedPost] = useState(null);

  if (!posts || posts.length === 0) {
    return <p>Loading posts...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Blog Posts</h1>
      <PostList posts={posts} onSelect={setSelectedPost} />
      {selectedPost && (
        <PostDetail post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
    return { props: { posts } };
  } catch (error) {
    return { props: { posts: [] } };
  }
}
