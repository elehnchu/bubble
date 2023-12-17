import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageList, MessageInput, Thread, Window } from 'stream-chat-react';
import { useParams } from 'react-router-dom'; // Import useParams
import 'stream-chat-react/dist/css/index.css';
import './ChatSearch.css';

const ChatSearch = () => {
  const { channelId } = useParams(); // Use useParams to get channelId

  const client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
  client.connectUser(
    { id: '5', name: 'Test' },
    client.devToken('5'.toString())
  );

  const channel = client.channel('messaging', 'channel1', {
    members: ['1', '5'], // Replace with actual user IDs
    name: 'COMS4170'
    // other channel data...
  });

  return (
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
  );
};

export default ChatSearch;
