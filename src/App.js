import './App.css';
import GroupSearch from './components/GroupSearch.js';
import UserProfile from './components/UserProfile';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import RequestGroup from './components/RequestGroup.js';
import CreateGroup from './components/CreateGroup.js'
import BubbleCreated from './components/BubbleCreated.js'
import NoBubbleFound from './components/NoBubbleFound.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';


function App() {
  return (
    <Router basename="/" hashType="noslash">
      <div className="App">
        <Routes>
          <Route path="/" element={<GroupSearch />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/requestgroup" element={<RequestGroup />} />
          <Route path="/creategroup" element={<CreateGroup />} />
          <Route path="/bubblecreated" element={<BubbleCreated />} />
          <Route path="/nobubblefound" element={<NoBubbleFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
