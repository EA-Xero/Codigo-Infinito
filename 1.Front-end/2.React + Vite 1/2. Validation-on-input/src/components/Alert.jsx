// const Alert = ({ msg, tipo }) => {
//   return (
//     <div
//       className={`alert ${tipo === "error" ? "error" : "success"} ${
//         msg ? "visible" : ""
//       }`}
//     >
//       {msg}
//     </div>
//   );
// };

// export default Alert;
const Alert = ({ msg, tipo }) => {
  let claseAlerta;

  if (tipo === "error") {
    claseAlerta = "error";
  } else if (tipo === "fill-out") {
    claseAlerta = "fill-out";
  } else if (tipo === "success") {
    claseAlerta = "success";
  }

  return (
    <div className={`alert ${claseAlerta} ${msg ? "visible" : ""}`}>{msg}</div>
  );
};

export default Alert;
