import Card from './components/Card'
import Header from './header/Header';

const App = () => {

  const project = [
    {
      projectName: "Gallery App",
      post: "API-Driven React Application",
      link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
      text: "Built a React web application that fetches and displays gallery data from external APIs. Implemented useEffect to manage side effects, handled dependency arrays for controlled re-renders, used cleanup functions for timers and event listeners, and applied best practices for asynchronous operations within React Hooks."
    },
    {
      projectName: "Blog Website",
      post: "React Router v6 Multi-Page Application",
      link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
      text: "Developed a multi-page blog website using React Router v6+, implementing nested routes, dynamic route parameters, protected routes with authentication guards, 404 error handling, and performance optimization using lazy loading and React Suspense."
    },
    {
      projectName: "Shopping Cart App",
      post: "Advanced State Management in React",
      link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
      text: "Developed a shopping cart application implementing useReducer for complex state logic, created custom hooks for reusable functionality, evaluated state management approaches including props drilling, Context API, and Redux, and explored modern state libraries such as Zustand and Jotai."
    },
    {
      projectName: "Movie Listing App ",
      post: "Advanced API Handling with React Query",
      link: "https://backend-ochre-sigma-32.vercel.app/todos.json",
      text: "Built a movie listing application using the TMDB API and React Query to manage server state, implementing data caching, automatic refetching, infinite queries for pagination, and robust error handling with retry mechanisms."
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