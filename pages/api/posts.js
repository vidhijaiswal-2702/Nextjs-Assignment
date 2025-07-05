export default function handler(req, res) {
  res.status(200).json([
    
    { id: 1, title: 'React Basics', content: 'Learn React from scratch in this post.' },
    { id: 2, title: 'Next.js Guide', content: 'Explore SSR and routing in Next.js here.' },
    { id: 3, title: 'Frontend Tips', content: 'CSS, HTML, and JavaScript tricks.' },
    { id: 4, title: 'Career in Web Dev', content: 'How to grow as a web developer.' }
  ]);
}
