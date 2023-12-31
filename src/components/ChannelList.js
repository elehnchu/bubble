import React, { useEffect, useState, useCallback, useContext } from 'react';
import { StreamChat } from 'stream-chat';
import { useNavigate } from 'react-router-dom';
import { ChannelStateContext } from 'stream-chat-react';
import { Chat, Channel, ChannelList, ChannelHeader, showMembers, MessageList, InfiniteScroll, MessageInput, Thread, Window, useChannelStateContext } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './ChannelList.css';
import classesImg from '../images/footer_classes.png'
import profileImg from '../images/footer_profile.png'
import chatImg from '../images/footer_chat.png'

const Members = ({client}) => {

  const channel = useChannelStateContext(); 
  const navigate = useNavigate();

  const handleChannelClick = useCallback(() => {
    const id = channel.channel.id;
    console.log('Channel ID', channel);
    navigate('/memberlist', { 'state': { 'members_dict': channel.members } });
  }, [channel, navigate]);

  return (
    <div className='seeMembers' onClick={handleChannelClick}></div>
  );
};

const ChannelListPage = () => {

  const filters = { members: { $in: ['5'] } }; // User ID '5'
  const sort = { last_updated: -1 };
  const options = { limit: 20, messages_limit: 20 };

  const client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
  client.connectUser(
    { id: '5', name: 'Test' },
    client.devToken('5'.toString())
  )
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
          <Members client={client}/>
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

export default ChannelListPage;



