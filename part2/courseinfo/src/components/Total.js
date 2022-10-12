const Total = (props) => {
    
    let total = props.parts.reduce((total, currentValue) =>
        {
            return total + currentValue.exercises;
        }, 0)

    return (
        <p>Total Exercises: {total}</p>
    )
}

export default Total;