import React from 'react';

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return props.parts.map((element, index) => (
    <Part part={element} exercise={props.exercises[index]} />
  ));
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Total = (props) => {
  var total = props.exercises.reduce((sum, value) => {
    return sum + value;
  }, 0);
  return <p>Number of exercises {total}</p>;
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3 = {
    name: 'State of a component',
    exercises: 14
  };

  const names = [part1.name, part2.name, part3.name];
  const exercises = [part1.exercises, part2.exercises, part3.exercises];

  return (
    <div>
      <Header course={course} />
      <Content parts={names} exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  );
};

export default App;
