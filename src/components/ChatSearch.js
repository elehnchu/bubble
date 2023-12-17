import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageList, MessageInput, Thread, Window } from 'stream-chat-react';
import { useNavigate, useParams } from 'react-router-dom'; // Import useParams
import 'stream-chat-react/dist/css/index.css';
import './ChatSearch.css';
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

const ChatSearch = () => {
  const { channelId } = useParams(); // Use useParams to get channelId

  const client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
  client.connectUser(
    { id: '5', name: 'Test' },
    client.devToken('5'.toString())
  );
  const navigate = useNavigate()

  const handleChatClick = () => {
    navigate('/channellist') // fix later
  }

  const handleClassesClick = () => {
    navigate('/courses') // fix later
  }

  const handleProfileClick = () => {
    navigate('/yourprofile')
  }
  const channel = client.channel('messaging', 'channel1', {
    members: ['1', '2', '5'], // Replace with actual user IDs
    name: 'STAT2102'
    // other channel data...
  });

  return (
    <>
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
    <div className="Footer">
        <img src={chatImg} alt='' className="footer-photo" onClick={handleChatClick}/>
        <img src={classesImg} alt='' className="footer-photo" onClick={handleClassesClick}/>
        <img src={profileImg} alt='' className="footer-photo" onClick={handleProfileClick}/>
    </div>
    </>
  );
};

export default ChatSearch;
