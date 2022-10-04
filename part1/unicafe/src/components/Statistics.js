import StatisticLine from './StatisticLine';

const Statistics = ({good, neutral, bad}) => {
  
  const total = good + neutral + bad;
    
  if (total !== 0) {
    
    let average = ((good - bad) / total);
    average = Math.round(average * 10) / 10;
    
    let positive = (good / total);
    positive = Math.round(positive * 1000) / 10;
    
    return (
      <>
      <h2>Statistics</h2>
        <table>
              <tbody>
                  <StatisticLine text="Good" value={good}/>
                  <StatisticLine text="Neutral" value ={neutral}/>
                  <StatisticLine text="Bad" value={bad}/>
                  <StatisticLine text="all" value={total}/>
                  <StatisticLine text="average" value={average}/>
                  <StatisticLine text="positive" value={positive + '%'}/>
              </tbody>
        </table>

      </>
    );
  }
  
  return (<p>No feedback given</p>);
}

export default Statistics;