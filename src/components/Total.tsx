import React from "react";
type CourseType = {
  name: string;
  exerciseCount: number;
};

type CoursesType = {
  courses: CourseType[];
};

const Totat: React.FC<CoursesType> = ({ courses }) => {
  const total = courses.reduce((cur, nex) => cur + nex.exerciseCount, 0);
  return <div>Number of exercises {total}</div>;
};

export default Totat;
