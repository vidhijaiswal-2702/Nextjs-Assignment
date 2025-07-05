# 📘 Blog Viewer – Next.js Assignment

A simple blog viewer built using **Next.js** with `getServerSideProps`, styled components, and full unit test coverage using **Jest** and **React Testing Library**.

---

## ✅ Features

- 📰 Fetches blog posts from a custom API (`/api/posts`)
- ⚡ Uses `getServerSideProps` for SSR (Server-Side Rendering)
- 🧱 Modular UI: `PostList` and `PostDetail` components
- 🪟 Modal view to display full blog post details
- ⏳ Loading and ❌ Error fallback UIs
- 🧪 Unit tests for all components + data fetching
- 📈 `jest --coverage` enabled for test coverage reporting

---

## 📂 Project Structure

```bash
blog-viewer/
├── components/
│ ├── PostList.js
│ ├── PostDetail.js
│ └── PostDetail.module.css
├── pages/
│ ├── api/posts.js
│ ├── posts.js
│ ├── _app.js
│ └── _document.js
├── tests/
│ ├── PostList.test.js
│ ├── PostDetail.test.js
│ └── posts.test.js
├── jest.config.js
├── jest.setup.js
├── babel.config.js
└── README.md
```

---

## 📦 Getting Started

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd blog-viewer
npm install

```

### 2. Run dev server
```bash
npm run dev
# Open http://localhost:3000/posts

```

### 3. Running Tests
```bash 
npx jest --coverage
```

Coverage Report will be shown in the terminal.

Tests for:

PostList component

PostDetail component

getServerSideProps data fetching

---
### 4. GET /api/posts
Returns mock blog data:
```json
[
  {
    "id": 1,
    "title": "First Post",
    "content": "This is the content of the first blog post."
  }
]
```

### 5. Tech Stack
React (via Next.js)

Server-Side Rendering (getServerSideProps)

CSS Modules for scoped styling

Jest + React Testing Library for testing