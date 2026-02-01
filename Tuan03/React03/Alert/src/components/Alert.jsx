import "./Alert.css";

function Alert({type}) {
    return(
        <div className={`alert ${type}`}>
            {type === "success" && "Success"}
            {type === "warning" && "Warning"}
            {type === "error" && "Error"}
        </div>
    );
}

export default Alert;