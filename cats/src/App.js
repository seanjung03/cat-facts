import History from "./components/History";
import None from "./components/None";
import { useState, useEffect } from "react";

//Styling for main page of web app
const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height:'95vh',
  width:'95vw',
  margin:0,
  padding:0,
  position:'absolute',
}

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
  const [currentFact, setCurrentFact] = useState(
    "No Cat Fact Yet!!! Click the button to generate a fact!"
  );

  useEffect(() => {
    if (
      currentFact !== "No Cat Fact Yet!!! Click the button to generate a fact!"
    ) {
      setHistory([].concat(currentFact, history));
    }
  }, [currentFact])

  return (
    <div className="App" style={appStyle}>
      <h1 >{currentFact}</h1>
      <button onClick={() => newFact(setCurrentFact)}>Generate a Fact!</button>
      <button onClick={() => setHistoryVisible(!historyVisible)}>History</button>
      {historyVisible ? <History data={history.slice(1)} /> : <None />}
    </div>
  );
}

export default App;
