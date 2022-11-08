import History from "./components/History";
import None from "./components/None";
import { useState, useEffect } from "react";

//Styling for main page of web app
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height:'99vh',
  width:'99vw',
  margin:0,
  padding:0,
  position:'absolute',
  gap:'5px',
}

const butts = {
  borderRadius: "5px",
  backgroundColor: "white",
};

function newFact(setCurrentFact) {
  fetch("https://catfact.ninja/fact")
    .then((data) => data.json())
    .then((obj) => {
      console.log(obj["fact"]);
      setCurrentFact(obj["fact"]);});
}

function App() {
  const [historyVisible, setHistoryVisible] = useState(false);
  const [history, setHistory] = useState([]);
  const [color, setColor] = useState([]);
  const [currentFact, setCurrentFact] = useState(
    "No Cat Fact Yet!!! Click the button to generate a fact!"
  );

  useEffect(() => {
    //Make sure the default expression doesn't get pushed to history array
    if (
      currentFact !== "No Cat Fact Yet!!! Click the button to generate a fact!"
    ) {
      setHistory([].concat(currentFact, history));
      setColor([].concat('white', color));
    }
  }, [currentFact])

  return (
    <div className="App" style={appStyle}>
      <h1 >{currentFact}</h1>

      <button style={butts} onClick={() => newFact(setCurrentFact)}>Generate a Fact!</button>
      <button style={butts} onClick={() => setHistoryVisible(!historyVisible)}>History</button>

      {historyVisible ? <History data={history} color={color} setColor={setColor} /> : <None />}
    </div>
  );
}

export default App;
