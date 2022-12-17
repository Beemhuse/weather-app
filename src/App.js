// import logo from './logo.svg';
import './App.css';
// This is the card imported from the Singlecard component.
import SingleCard from './components/card';

function App() {
  let name = 'Bright'
  return (
    <div className="App">
      {/* The cards are used here as a jsx component */}
      {/* The main importance of this is to pass props, which is sending data from one component to another
      
      In this case what we are doing is to send the name which has a value of samuel and bright to the component singlecard
      pasing props can be either of the two method shown below.
      */}
      <SingleCard name='Samuel'/>
      <SingleCard name = {name}/>
    </div>
  );
}

export default App;
