import React, { useState } from 'react';

const NextAnecdote = (props) => {
  return (
    <button
      onClick={() => {
        props.setSelected(Math.floor(Math.random() * props.arrayLength));
      }}
    >
      next anecdote
    </button>
  );
};

const VoteCount = ({ votes }) => {
  return <div>has {votes} votes</div>;
};

const VoteButton = (props) => {
  return (
    <button
      onClick={() => {
        const points = [...props.points];
        points[props.selected]++;
        props.setPoints(points);
      }}
    >
      vote
    </button>
  );
};

const MostVotedAnecdote = (props) => {
  const points = props.points;
  const index = points.indexOf(Math.max(...points));
  return (
    <div>
      {props.anecdotes[index]}
      <div>has {points[index]} votes</div>
    </div>
  );
};

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ];
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0);
  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <VoteCount votes={points[selected]} />
      <VoteButton setPoints={setPoints} points={points} selected={selected} />
      <NextAnecdote setSelected={setSelected} arrayLength={anecdotes.length} />
      <h1>Anecdote with most votes</h1>
      <MostVotedAnecdote points={points} anecdotes={anecdotes} />
    </div>
  );
};

export default App;
