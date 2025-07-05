// pages/index.js
import React from 'react'; 

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/posts');
  }, [router]);

  return <p>Redirecting to posts...</p>;
}
