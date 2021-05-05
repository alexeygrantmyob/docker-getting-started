import './App.css';
import {MyComponent} from './MyComponent'

function App() {
  fetch("http://localhost:3000/data").then(response => response.json)
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
}

export default App;
