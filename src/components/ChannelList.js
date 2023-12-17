import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { useNavigate } from 'react-router-dom';
import { Chat, Channel, ChannelList, ChannelHeader, showMembers, MessageList, InfiniteScroll, MessageInput, Thread, Window, useChannelStateContext } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './ChannelList.css';
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

const ChannelListPage = () => {

  const filters = { members: { $in: ['5'] } }; // User ID '5'
  const sort = { last_updated: -1 };
  const options = { limit: 20, messages_limit: 20 };

  const navigate = useNavigate();
  const { channel } = useChannelStateContext(); 

  const handleHeaderClick = () => {
    if (channel) {
      navigate('/memberlist', { state: { channelId: channel.id } });
    }
  };

  const handleChatClick = () => {
    navigate('/channellist') // fix later
  }

  const handleClassesClick = () => {
    navigate('/courses') // fix later
  }

  const handleProfileClick = () => {
    navigate('/yourprofile')
  }

  const client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
  client.connectUser(
    { id: '5', name: 'Test' },
    client.devToken('5'.toString())
  )

  return (
    <>
      <Chat client={client}>
        <ChannelList
            filters={filters}
            sort={sort}
            options={options}
            Paginator={InfiniteScroll}
            showChannelSearch
        />
        <Channel>
          <Window>
            <ChannelHeader onClick={handleHeaderClick} />
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

export default ChannelListPage;



