import React from 'react';

const Header = (props) => {
  return <h2>{props.course}</h2>;
};

const Content = (props) => {
  return props.parts.map((part) => <Part part={part} />);
};

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};

const Total = (props) => {
  var total = props.parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return <b>total of {total} exercises</b>;
};

const Course = ({ courses }) => {
  return courses.map((course) => (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  ));
};

export default Course;
