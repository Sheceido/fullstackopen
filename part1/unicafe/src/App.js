import { useState } from 'react'
import Button from './components/Button';
import Statistics from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => setGood(good + 1);
  const incrementNeutral = () => setNeutral(neutral + 1);
  const incrementBad = () => setBad(bad + 1);

  return (
    <div>
      <h1>Give Feedback!</h1>
      <Button onClick={incrementGood} text={"Good"}/>
      <Button onClick={incrementNeutral} text={"Neutral"}/>
      <Button onClick={incrementBad} text={"Bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App