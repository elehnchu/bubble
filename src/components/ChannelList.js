import React from 'react';
import { Link } from 'react-router-dom';

const ChannelList = () => {
  // Fetch and display a list of channels

  return (
    <div>
      <h1>Channel List</h1>
      <ul>
        <li>
          <Link to="/chatsearch/channel1">Channel 1</Link>
        </li>
        <li>
          <Link to="/chatsearch/channel2">Channel 2</Link>
        </li>
        {/* Add more channel links as needed */}
      </ul>
    </div>
  );
};

export default ChannelList;
