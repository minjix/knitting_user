import "./App.css";
import "./bootstrap.min.css";
import Login from "./components/Login.js";
import knittingIcon from "./icon/knitting_icon.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">
          <h2>Knitting Record</h2>
          <img src={knittingIcon} alt="뜨개 아이콘" />
        </div>
        <div>
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;
