import { useState } from 'react';
import AnecdoteDisplay from './components/Anecdotes';
import VoteDisplay from './components/VoteDisplay';
import MostVotes from './components/MostVotes';
import Button from './components/Button';
import getRandomInt from './GetInt';

const App = () => {
  
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  // Hooks
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Uint16Array(anecdotes.length));

  // Modify State
  const nextAnecdote = (selected) => {
    if (selected === anecdotes.length - 1) {
      selected = 0;
      setSelected(selected);
    
    } else {
      setSelected(selected + 1)
    }
  }

  const vote = (selected) => {

    const newArray = [...points];
    newArray[selected] += 1;
    setPoints(newArray);
  }
  
  // JSX
  return (
    <div>
      <AnecdoteDisplay selected={selected} anecdotes={anecdotes}/>
      <VoteDisplay points={points} selected={selected}/>
      <Button onClick={() => vote(selected)} text="Vote"/>
      <Button onClick={() => nextAnecdote(selected)} text="Next"/>
      <Button onClick={() => setSelected(getRandomInt(anecdotes.length))} text="Random"/>
      <MostVotes points={points} anecdotes={anecdotes}/>
    </div>
  )
}

export default App;