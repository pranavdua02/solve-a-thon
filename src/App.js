import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import WelcomePage from './pages/welcome/WelcomePage';
import './App.css';
import StartPage from "./pages/startPage/StartPage";
import PlanningsPage from "./pages/plannings/PlanningsPage";
import InspirationPage from "./pages/inspiration/InspirationPage";
import DestinationPage from "./pages/destination/DestinationPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<WelcomePage/>}/>
          <Route path="/start" element={<StartPage/>}/>
          <Route path="/destination" element={<DestinationPage/>}/>
          <Route path="/plannings" element={<PlanningsPage/>}/>
          <Route path="/inspiration" element={<InspirationPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
