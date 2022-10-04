const AnecdoteDisplay = ({selected, anecdotes}) => {
    return (
        <>
            <h3>Anecdote of the Day</h3>
            <p>{anecdotes[selected]}</p>
        </>
    );
}

export default AnecdoteDisplay;
