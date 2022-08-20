import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Gyms from './components/Gyms/Gyms';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Gyms/>
    </div>
  );
}

export default App;
