const SuccessNotification = ({message}) => {
    const SuccessStyling = {
        textAlign: "center",
        fontSize: "30px",
        border: "1px solid green",
        borderRadius: "5px",
        color: "green",
        background: "#F0F0F0",
    }
    
    if (message === "") {
        return;
    }

    return (
        <div style={SuccessStyling}>{message}</div>
    );

}

export default SuccessNotification;