import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Home from './components/home/Home'
import Widge from './components/widge/Widge'

function App() {
  return (
    <div className="App">
     <Sidebar/>
     <Home/>
     <Widge/>
    </div>
  );
}

export default App;
