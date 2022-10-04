import StatisticLine from './StatisticLine';

const Statistics = ({good, neutral, bad}) => {

    if (good !== 0 || neutral !== 0 || bad !== 0) {
      const total = good + neutral + bad;
      
      let average = ((good - bad) / (good + neutral + bad));
      average = Math.round(average * 10) / 10;
      
      let positive = (good / (good + neutral + bad));
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