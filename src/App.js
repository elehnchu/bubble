import React from 'react';
import './App.css'
import GroupSearch from './components/GroupSearch';
import UserProfile from './components/UserProfile';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { UserProvider } from './components/UserContext';
// import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import YourProfile from './components/YourProfile';
import RequestGroup from './components/RequestGroup';
import CreateGroup from './components/CreateGroup';
import BubbleCreated from './components/BubbleCreated';
import NoBubbleFound from './components/NoBubbleFound';
import Courses from './components/Courses';
import Settings from './components/Settings.js';
import LikedProfiles from './components/LikedProfiles.js';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ChatSearch from './components/ChatSearch';
import ChannelList from './components/ChannelList';

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/groupsearch" element={<GroupSearch />} />
            <Route path="/userprofile" element={<UserProfile />} />
            <Route path="/yourprofile" element={<YourProfile />} />
            <Route path="/requestgroup/:groupId" element={<RequestGroup />} />
            <Route path="/creategroup" element={<CreateGroup />} />
            <Route path="/bubblecreated" element={<BubbleCreated />} />
            <Route path="/nobubblefound" element={<NoBubbleFound />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/likedprofiles" element={<LikedProfiles />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/chatsearch/:channelId" element={<ChatSearch />} /> {/* Add route for chat search */}
            <Route path="/channellist" element={<ChannelList />} /> {/* Add route for channel list */}
          </Routes>
          <div className="Footer"></div>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
