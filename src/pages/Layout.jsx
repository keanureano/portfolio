import { Outlet } from "react-router-dom";
import { Link, NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import LoadingPage from "./LoadingPage";
import { CSSTransition } from "react-transition-group";

export default function Layout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMain, setIsMain] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  const isMainHandler = (event) => {
    event.preventDefault();
    setIsMain(false);
    setTimeout(() => {
      setIsMain(true);
      navigate(event.target.pathname);
    }, 250);
  };

  return (
    <div className="w-full h-full p-4 md:p-12 bg-black-900 text-white/90">
      <div className="bg"></div>
      <div className="fade-in-onload flex flex-col justify-between w-full h-full p-4 md:p-12 border border-black-400 outline outline-[200px] outline-black-950">
        <Header isMainHandler={isMainHandler} />
        <Main isMain={isMain} />
      </div>
    </div>
  );
}

function Header({ isMainHandler }) {
  return (
    <header className="space-y-5">
      <div className="flex">
        <Link to="/" onClick={isMainHandler}>
          <h1>Keanu Reaño</h1>
          <h2>Full Stack Developer</h2>
          <h2>UI/UX Designer</h2>
        </Link>
      </div>
      <div className="flex">
        <nav className="flex flex-col font-semibold">
          <NavLink to="/" onClick={isMainHandler}>
            Home
          </NavLink>
          <NavLink to="/projects" onClick={isMainHandler}>
            Projects
          </NavLink>
          <NavLink to="/contact" onClick={isMainHandler}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

function Main({ isMain }) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isMain}
      timeout={1000}
      classNames="fade"
    >
      <main ref={nodeRef} className="flex justify-end">
        <Outlet />
      </main>
    </CSSTransition>
  );
}
