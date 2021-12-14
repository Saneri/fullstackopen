import React, { useState } from 'react';

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.label}</button>;
};

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>
        {props.value} {props.endingText}
      </td>
    </tr>
  );
};

const Statistics = (props) => {
  const sum = props.good + props.neutral + props.bad;
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return <div>No feedback given</div>;
  }

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value={props.neutral} />
          <StatisticLine text="bad" value={props.bad} />
          <StatisticLine text="all" value={sum} />
          <StatisticLine
            text="average"
            value={(props.good * 1 + props.bad * -1) / sum}
          />
          <StatisticLine
            text="positive"
            value={props.good / sum}
            endingText="%"
          />
        </tbody>
      </table>
    </div>
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
