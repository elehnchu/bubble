import './App.css';
import List from './List.js';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RequestGroup from './components/RequestGroup.js';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="Header">
        </div>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/requestgroup" element={<RequestGroup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
