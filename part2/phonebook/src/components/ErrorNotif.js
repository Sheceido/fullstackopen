const ErrorNotification = ({message}) => {
    const ErrorStyling = {
        textAlign: "center",
        fontSize: "30px",
        border: "1px solid red",
        borderRadius: "5px",
        color: "red",
        background: "#F0F0F0",
    }
    
    if (message === "") {
        return;
    }

    return (
        <div style={ErrorStyling}>{message}</div>
    );

}

export default ErrorNotification;