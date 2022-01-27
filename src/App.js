

import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './mainPage';
import PersonalDetails from './components/PersonalDetails';
import Schedule from './schedule';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/personaldetails" element={<PersonalDetails />}> </Route>
          <Route path="/schedule" element={<Schedule />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
