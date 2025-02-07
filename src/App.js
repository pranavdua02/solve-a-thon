import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import WelcomePage from './pages/welcome/WelcomePage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
