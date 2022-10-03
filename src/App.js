import './App.css';
import Cardform from "./Components/creditcard/Cardform"
import CreatePassword from "./Components/passwordGenerator/createPassword"

function App() {
  return (
    <div className="App">
      {/* <Cardform/> To run credit card from app uncomment this line and comment out CreatePassword component */}
      <CreatePassword></CreatePassword>
    </div>
  );
}

export default App;
