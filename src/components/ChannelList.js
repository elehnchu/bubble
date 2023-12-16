import React from 'react';
import { Link } from 'react-router-dom';

const ChannelList = () => {
  // Fetch and display a list of channels here
  return (
    <div>
      <h2>Channel List</h2>
      <ul>
        <li>
          <Link to="/channel/1">Channel 1</Link>
        </li>
        {/* Add more channel links as needed */}
      </ul>
    </div>
  );
};

export default ChannelList;
