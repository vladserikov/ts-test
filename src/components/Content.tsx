import React from "react";

type CourseType = {
  name: string;
  exerciseCount: number;
};

type CoursesType = {
  courses: CourseType[];
};

const Content: React.FC<CoursesType> = ({ courses }) => {
  return (
    <div>
      {courses.map(cours => (
        <p key={cours.name}>
          {cours.name} {cours.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
