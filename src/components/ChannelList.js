import React, { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, Channel, ChannelList, ChannelHeader, showMembers, MessageList, InfiniteScroll, MessageInput, Thread, Window, useChannelStateContext } from 'stream-chat-react';
import 'stream-chat-react/dist/css/index.css';
import './ChannelList.css';

const Users = () => {
  const { channel } = useChannelStateContext();
  const [channelUsers, setChannelUsers] = useState([]);

  useEffect(() => {
    const updateChannelUsers = () => {
      if (channel?.state?.members) {
        setChannelUsers(
          Object.values(channel.state.members).map((member) => ({
            name: member.user_id,
            online: member.user?.online,
          }))
        );
      }
    };

    updateChannelUsers();
    // Subscribe to changes in channel state
    channel?.on('member.added', updateChannelUsers);
    channel?.on('member.removed', updateChannelUsers);
    
    return () => {
      // Cleanup listeners on component unmount
      channel?.off('member.added', updateChannelUsers);
      channel?.off('member.removed', updateChannelUsers);
    };
  }, [channel]);

  return (
    <ul className='users-list'>
      {channelUsers.map((member) => (
        <li key={member.name}>
          {member.name} - {member.online ? 'online' : 'offline'}
        </li>
      ))}
    </ul>
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

  return (
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
          <Users />
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChannelListPage;



