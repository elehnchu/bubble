import './App.css';
import GroupSearch from './components/GroupSearch.js';
import UserProfile from './components/UserProfile';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RequestGroup from './components/RequestGroup.js';
import CreateGroup from './components/CreateGroup.js'


function App() {
  return (
    <Router basename="/" hashType="noslash">
      <div className="App">
        <div className="Header">
        </div>
        <Routes>
          <Route path="/" element={<GroupSearch />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/requestgroup" element={<RequestGroup />} />
          <Route path="/creategroup" element={<CreateGroup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
