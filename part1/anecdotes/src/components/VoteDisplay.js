const VoteDisplay = ({points, selected}) => {
    return (
        <p>Has {points[selected]} votes</p>
    );
}

export default VoteDisplay;