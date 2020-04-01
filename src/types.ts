interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CorsePartDescription extends CoursePartBase {
  description: string;
}

interface CoursePartOne extends CorsePartDescription {
  name: "Fundamentals";
}

interface CoursePartTwo extends CoursePartBase {
  name: "Using props to pass data";
  groupProjectCount: number;
}

interface CoursePartThree extends CorsePartDescription {
  name: "Deeper type usage";
  exerciseSubmissionLink: string;
}

export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree;

export interface CourseType {
  cours: CoursePart;
};

export interface CoursesType {
  courses: CoursePart[];
};