export default function AlertBanner({ message }) {
  const style = {
    backgroundColor: "red",
    color: "white",
    padding: "10px",
    textAlign: "center",
  };
  return <div style={style}>{message}</div>;
}
