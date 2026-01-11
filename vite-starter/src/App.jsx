import "./App.css";
import { useState } from "react";
import { kebabToCamelCase } from "./helpers";
function App() {
  const [buttonColor, setButtonColor] = useState("medium-violet-red");
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const newButtonColor =
    buttonColor === "midnight-blue" ? "medium-violet-red" : "midnight-blue";
  return (
    <div>
      <button
        onClick={() => setButtonColor(newButtonColor)}
        className={buttonDisabled ? "grey" : buttonColor}
        disabled={buttonDisabled}
      >
        Change to {kebabToCamelCase(newButtonColor)}
      </button>
      <input
        type="checkbox"
        id="disable-button"
        onChange={(e) => setButtonDisabled(e.target.checked)}
      />
      <label htmlFor="disable-button">Disable button</label>
    </div>
  );
}

export default App;
