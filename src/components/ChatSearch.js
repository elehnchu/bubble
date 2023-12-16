import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelHeader, MessageList, MessageInput, Thread, Window } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';

const client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
client.connectUser({ id: '5', name: 'Test' }, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNSJ9.REqW1dxp6rOnIOUZ-Gq9zE4jVVRTOySXcFOmNBVm09I');

const channel = client.channel('livestream', 'channelname', {
    members: ['5'], // Replace with the actual user IDs
    // other channel data...
  });
  

const ChatComponent = () => (
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

export default ChatComponent;