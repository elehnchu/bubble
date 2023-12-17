import React from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, ChannelHeader, MessageList, InfiniteScroll, MessageInput, Thread, Window } from 'stream-chat-react';
import { useNavigate } from 'react-router-dom';
import 'stream-chat-react/dist/css/index.css';
import './ChannelList.css';

const ChannelListPage = () => {
  // const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);
  //const navigate = useNavigate();

  const filters = { members: { $in: ['5'] } }; // User ID '5'
  const sort = { last_updated: -1 };
  const options = { limit: 20, messages_limit: 20 };

  const client = new StreamChat(process.env.REACT_APP_STREAM_API_KEY);
  client.connectUser(
    { id: '5', name: 'Test' },
    client.devToken('5'.toString())
  );

  return (
    // <div className='IMBABY'>
    <Chat client={client} >
      <ChannelList
          filters={filters}
          sort={sort}
          options={options}
          Paginator={InfiniteScroll}
          showChannelSearch
      />
        <Channel>
          <Window>
            <ChannelHeader />
            {/* <MessageInput /> */}
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
    </Chat>
  );
};

export default ChannelListPage;



