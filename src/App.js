import React, { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.label}</button>;
};

const Display = (props) => {
  return (
    <div>
      {props.text}: {props.value} {props.endingText}
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const sum = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button label="good" handleClick={() => setGood(good + 1)} />
      <Button label="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button label="bad" handleClick={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
      <Display text="all" value={sum} />
      <Display text="average" value={(good * 1 + bad * -1) / sum} />
      <Display text="positive" value={good / sum} endingText="%" />
    </div>
  );
};

export default App;
