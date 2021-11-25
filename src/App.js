import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
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
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
