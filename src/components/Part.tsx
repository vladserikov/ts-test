import React from "react";
import { CourseType } from "../types";

const Part: React.FC<CourseType> = props => {
  const { cours } = props;
  switch (cours.name) {
    case "Deeper type usage":
      return (
        <div>
          {cours.name} {cours.exerciseCount} {cours.description}{" "}
          {cours.exerciseSubmissionLink}
        </div>
      );
    case "Fundamentals":
      return (
        <div>
          {cours.name} {cours.exerciseCount} {cours.description}
        </div>
      );
    case "Using props to pass data":
      return (
        <div>
          {cours.name} {cours.exerciseCount} {cours.groupProjectCount}
        </div>
      );
    default:
      throw new Error("invalid data");
  }
};

export default Part;
