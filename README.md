# 📘 Blog Viewer – Next.js Assignment

A simple blog viewer built using **Next.js** with `getServerSideProps`, styled components, and full unit test coverage using **Jest** and **React Testing Library**.

---

## ✅ Features


- **API Route**:  
  Custom API at `/api/posts` serves blog posts in JSON format.

- **Server-Side Data Fetching**:  
  Uses `getServerSideProps()` to fetch post data at request time from the API.

- **Post Listing**:  
  Shows a list of blog post titles using a reusable `PostList` component.

- **Post Detail View**:  
  Clicking a title opens a **modal popup** displaying the full post via `PostDetail` component.

- **Dynamic UI with State**:  
  Uses `useState` to manage selected posts and modal visibility.

- **Fallback UI**:  
  Displays a **loading message** while posts are being fetched or when data is unavailable.

- **Component-Level Styling**:  
  Clean CSS Modules (`.module.css`) for scoped styling.


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
git clone https://github.com/vidhijaiswal-2702/Nextjs-Assignment
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
## 4. Testing Setup

- **Framework**: Jest  
- **Component Testing**: React Testing Library  
- **CSS Mocking**: `identity-obj-proxy` for CSS Modules  
- **Config**:
  - `jest.config.js`: Jest config file
  - `jest.setup.js`: Environment setup
  - `babel.config.js`: Babel config for Jest

---

### 5. Test Cases Explained

| Test File                   | Purpose                                                                                       | Tools Used                    |
|----------------------------|-----------------------------------------------------------------------------------------------|-------------------------------|
| `PostList.test.js`         | Tests if all blog titles are rendered and clickable.                                          | Jest, React Testing Library   |
| `PostDetail.test.js`       | Tests if full post content is displayed and "Close" button works as expected.                | Jest, React Testing Library   |
| `posts.test.js`            | Tests the `getServerSideProps()` function returns mocked API data correctly.                 | Jest, `global.fetch` mocking  |

#### 🔍 Details

1. **✅ `PostList.test.js`**  
   - Renders the list of blog posts.
   - Checks if titles appear on the screen.
   - Simulates a click and checks if correct post is passed to handler.

2. **✅ `PostDetail.test.js`**  
   - Renders full post content (`title`, `body`) in a modal.
   - Clicks the **"Close"** button and checks if the modal handler works.

3. **✅ `posts.test.js`**  
   - Mocks `fetch()` to return mock posts.
   - Calls `getServerSideProps()` manually and asserts the returned props.

---

### 6. GET /api/posts
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

### 7. Tech Stack
React (via Next.js)

Server-Side Rendering (getServerSideProps)

CSS Modules for scoped styling

Jest + React Testing Library for testing

### 8. Author
Name: Vidhi Jaiswal

GitHub: @vidhijaiswal-2702

Project: Blog Viewer Assignment using Next.js, Jest, and React Testing Library