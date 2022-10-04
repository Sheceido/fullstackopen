import VoteDisplay from "./VoteDisplay";

const MostVotes = ({points, anecdotes}) => {
    
    let maxVotes = 0;
    let index = 0;
    let mostVotedAnecdote = '';

    for (let i = 0; i < anecdotes.length; i++) {
        if (points[i] > maxVotes) {
            
            maxVotes = points[i];
            
            index = i;
            mostVotedAnecdote = anecdotes[i];
        }
    }

    if (mostVotedAnecdote === '') {
        mostVotedAnecdote = "No votes have been casted yet.";
    }

    return (
        <>
            <h4>Anecdote with Most Votes:</h4>
            <p>{mostVotedAnecdote}</p>
            <VoteDisplay points={points} selected={index}/>
        </>
    );
}

export default MostVotes;