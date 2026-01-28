import Card from './components/Card'
import Header from './header/Header';

const App = () => {

const project = [
  {
    projectName: "Pipeline Builder",
    post: "🛠 React.js · Tailwind CSS",
    link: "https://may-paytm.vercel.app/",
    text: "•	Architected and developed a visual node-based pipeline builder, enabling users to create complex workflows through an intuitive interface. Designed declarative configuration system reducing new node creation time from 30+ minutes to under 2 minutes. Implemented variable detection parser recognizing `{{variableName}}` syntax with real-time validation."
  },
  {
    projectName: "Paytm",
    post: "🛠 React.js · Node.js · Express.js · MongoDB · Tailwind CSS",
    link: "https://may-pipeline-builder.vercel.app/",
    text: "Architected and developed a secure payment transfer system handling user authentication, real-time balance updates, and transaction management. Implemented transactions using MongoDB sessions to prevent balance inconsistencies during concurrent transfers. Designed authentication system using JWT with middleware-based route protection and session management."
  },
  {
    projectName: "Todo Complete",
    post: "🛠 React · Node.js · Express · MongoDB",
    link: "https://may-todo-complete.vercel.app/",
    text: "Full-stack Todo application with RESTful APIs. CRUD functionality with secure JWT authentication. Schema validation using Zod and database modeling with Mongoose. API integration using Axios. CORS configuration and version control with Git & GitHub"
  },
  {
    projectName: "Gallery App",
    post: "🛠 React · REST APIs · Hooks",
    link: "https://may-gallery-app.vercel.app/",
    text: "Built a React web application that fetches and displays gallery data from external APIs. Implemented useEffect to manage side effects, handled dependency arrays for controlled re-renders, used cleanup functions for timers and event listeners, and applied best practices for asynchronous operations within React Hooks."
  },
  {
    projectName: "Blog Website",
    post: "🛠 React Router v6 Multi-Page Application",
    link: "https://may-blog-website.vercel.app/",
    text: "Developed a multi-page blog website using React Router v6+, implementing nested routes, dynamic route parameters, protected routes with authentication guards, 404 error handling, and performance optimization using lazy loading and React Suspense."
  },
  {
    projectName: "Notes App",
    post: "🛠 React Hooks · Forms · UX",
    link: "https://may-notes-app.vercel.app/",
    text: "Built a notes management application focusing on controlled and uncontrolled form inputs, implemented two-way data binding, utilized useRef for uncontrolled fields, designed multi-step forms, and added undo functionality to manage user input effectively."
  // },
  // {
  //   projectName: "Movie Listing App",
  //   post: "Advanced API Handling with React Query",
  //   link: "https://movie-listing-app-rho.vercel.app/",
  //   text: "Built a movie listing application using the TMDB API and React Query to manage server state, implementing data caching, automatic refetching, infinite queries for pagination, and robust error handling with retry mechanisms."
  // },
  // {
  //   projectName: "Weather App",
  //   post: "API Integration & Async Data Handling",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Developed a weather application integrating external APIs using Fetch and Axios, implemented loading, error, and empty states, applied debouncing for search optimization, and handled pagination and infinite scroll concepts for better user experience."
  // },
  // {
  //   projectName: "GitHub User Search",
  //   post: "Asynchronous Search & Performance Optimization",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Created a GitHub user search application with debounced input handling, API integration, conditional UI states, and efficient rendering strategies, while explaining CSR vs SSR vs ISR concepts for modern web applications."
  // },
  // {
  //   projectName: "Theme Switcher",
  //   post: "Styling & Theming in React",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Implemented a light/dark theme switcher using Tailwind CSS, CSS Modules, and styled components, applied responsive design principles, and added smooth UI transitions with basic Framer Motion animations."
  // },
  // {
  //   projectName: "Auth Context App",
  //   post: "Global State Management with Context API",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Developed an authentication system using React Context API to solve prop drilling, implemented global state updates for login/logout flows, protected routes, and evaluated scenarios where Context should and should not be used."
  // },
  // {
  //   projectName: "Shopping Cart with Reducer",
  //   post: "Advanced State Logic using useReducer",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Built an advanced shopping cart using useReducer for complex state transitions, created custom hooks for reusable logic, and compared state management approaches including props drilling, Context API, Redux, and modern libraries like Zustand and Jotai."
  // },
  // {
  //   projectName: "Notes App (Redux Toolkit)",
  //   post: "State Management with Redux Toolkit",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Developed a notes application using Redux Toolkit, implementing slices, reducers, and async thunks for API calls, and integrated Redux seamlessly with React for scalable and predictable state management."
  // },
  // {
  //   projectName: "Large List Filter",
  //   post: "Performance & Optimization in React",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Optimized a large data list using React.memo, useMemo, and useCallback, implemented debounce and throttle custom hooks, applied lazy loading for components, optimized images, and analyzed performance using React profiling tools."
  // },
  // {
  //   projectName: "Firebase Auth Flow",
  //   post: "Authentication & Authorization in React",
  //   link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
  //   text: "Implemented a complete authentication and authorization flow using Firebase Auth, compared JWT and session-based authentication, managed tokens securely, created role-based route guards, and integrated AuthContext with protected routes."
  }
];


return (
  <>
    <Header />

    <div className="parent">
      {project.map((elem, idx) => (
        <Card
          key={idx}
          projectName={elem.projectName}
          post={elem.post}
          text={elem.text}
          link={elem.link}
        />
      ))}
    </div>
  </>
);
}

export default App
