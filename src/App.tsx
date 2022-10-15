/* eslint-disable operator-linebreak */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, useLocation } from 'react-router-dom';

function Home() {
  return <div>Hello World</div>;
}

function About() {
  return <div>About</div>;
}

function Projects() {
  return <div>Projects</div>;
}

function ProjectDetails() {
  const params = useParams();
  return <div>Current project viewing is {params.projectId}</div>;
}

function Page404() {
  return <div>404 Not Found</div>;
}

function App() {
  const route = useLocation();

  return (
    <div className="w-full h-screen font-['Jetbrains_Mono'] bg-neutral-900 text-amber-400 flex flex-col">
      <nav className="w-full px-12 py-10 flex justify-between items-center">
        <h1 className="text-xl">React Router YYDS</h1>
        <ul className="flex gap-16 items-center">
          {[
            ['/', 'Home'],
            ['/about', 'About'],
            ['/projects', 'Projects'],
            ['/contact', 'Contact'],
          ].map(([path, name]) => (
            <li key={path}>
              <Link
                to={path}
                className={`${
                  route.pathname === path &&
                  'font-bold relative after:contents-[""] after:absolute after:-bottom-1 after:left-1/2 after:w-8 after:border-b-2 after:border-amber-400 after:-translate-x-1/2'
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex-1 flex text-4xl w-full items-center justify-center">
        <Routes>
          <Route element={<Page404 />} path="*" />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
