"use client";

import { useRef, useEffect } from "react";

import classNames from "@/utils/classNames";

interface IDecorationColumnsProps {
  className?: string;
  columnsCount?: number;
}

const DecorationColumns: React.FC<IDecorationColumnsProps> = (props) => {
  const { className, columnsCount = 12 } = props;
  const decorationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (decorationRef.current) {
            decorationRef.current.classList.add("decoration-columns--visible");
            observer.disconnect();
          }
        }
      });
    });

    if (decorationRef.current) {
      observer.observe(decorationRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={decorationRef}
      className={classNames("decoration-columns", className)}
      style={
        { "--decoration-columns-count": columnsCount } as React.CSSProperties
      }
    >
      {new Array(columnsCount).fill("").map((c, i) => (
        <span key={i} />
      ))}
    </div>
  );
};

export default DecorationColumns;
