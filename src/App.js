import './App.css';
import MainComponent from "./components/MainComponent"

const inventory = [
  {
      "name": "Product #1",
      "price": 100,
      "amount-available": 10 
  },
  {
      "name": "Product #2",
      "price": 50,
      "amount-available": 20
  },
  {
      "name": "Product #3",
      "price": 75,
      "amount-available": 30
  },
  {
      "name": "Product #4",
      "price": 150,
      "amount-available": 40
  },
  {
      "name": "Product #5",
      "price": 200,
      "amount-available": 50 
  }
];
function App() {

  return (
    <div className="App">
      <div className="row">
        <MainComponent data={inventory}/> 
      </div>
    </div>
  );
}

export default App;
