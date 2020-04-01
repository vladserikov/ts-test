import React from "react";
import Part from "./Part";
import { CoursesType } from "../types";

const Content: React.FC<CoursesType> = ({ courses }) => {
  return (
    <div>
      {courses.map(cours => (
        <Part key={cours.name} cours={cours} />
      ))}
    </div>
  );
};

export default Content;
