import Alert from "react-bootstrap/Alert";

const CustomAlert = ({ msg, tipo }) => {
  return (
    <Alert variant={tipo === "error" ? "danger" : "success"} show={msg !== ""}>
      {msg}
    </Alert>
  );
};

export default CustomAlert;
