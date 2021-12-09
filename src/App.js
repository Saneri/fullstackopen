import React, { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.label}</button>;
};

const Display = (props) => {
  return (
    <h4>
      {props.text}: {props.value}
    </h4>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
    </div>
  );
};

export default App;
