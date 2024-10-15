"use client";

import classNames from "@/utils/classNames";
import { PropsWithChildren, useCallback, useEffect } from "react";

interface IMainNavWrapperProps extends PropsWithChildren {
  className?: string;
}

const MainNavWrapper: React.FC<IMainNavWrapperProps> = (props) => {
  const { className, children } = props;

  const toggleNavScrolledClass = useCallback(() => {
    document.body.classList.toggle("is-nav-scrolled", window.scrollY > 100);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", toggleNavScrolledClass);
    toggleNavScrolledClass();

    return () => {
      window.removeEventListener("scroll", toggleNavScrolledClass);
    };
  }, [toggleNavScrolledClass]);

  return (
    <div className={classNames("main-nav-wrapper", className)}>{children}</div>
  );
};

export default MainNavWrapper;
