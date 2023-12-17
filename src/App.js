import React, { useState } from 'react';
import './App.css';
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
import AboutMe from './components/AboutMe.js';
import ChatSearch from './components/ChatSearch';
import ImportCourses from './components/ImportCourses.js';
import RetrieveCourses from './components/RetrieveCourses.js';
import ChannelList from './components/ChannelList';
import MemberList from './components/MemberList';


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
            <Route path="/retrievecourses" element={<RetrieveCourses />} />
            <Route path="/importcourses" element={<ImportCourses />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/chatsearch/:channelId" element={<ChatSearch />} />
            <Route path="/channellist" element={<ChannelList />} />
            <Route path="/memberlist" element={<MemberList />} />
          </Routes>
          <div className="Footer"></div>
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;
