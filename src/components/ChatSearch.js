import React, { useState, useEffect } from 'react';
import { Chat, Channel, MessageList, MessageInput, ChannelList, ChannelPreviewMessenger } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

console.log("Stream API Key:", process.env.REACT_APP_STREAM_API_KEY);
const chatClient = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);

const ChatSearch = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    const fetchTokenAndConnect = async () => {
      const userId = 5; // Replace with actual user ID
      const password = 'pass'; // Replace with actual password
  
      try {
        const response = await fetch('http://localhost:5000/stream-token', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ user_id: userId, password: password })
        });
  
        if (!response.ok) {
          throw new Error('Failed to fetch token');
        }
  
        const { token, user } = await response.json();
        console.log('Attempting to connect user', user);
        await chatClient.connectUser(
          {
            id: user.id.toString(),
            name: user.name,
            image: user.profilePicUrl
          },
          token
        );
        console.log(user.id);
        console.log(user.name);
        console.log(user.image);
        console.log(chatClient);
        console.log('Connection successful');
      } catch (err) {
        console.error('Error connecting to chat:', err);
      }
    };
  
    fetchTokenAndConnect();
  
    return () => {
        if (chatClient.userID) {
          chatClient.disconnectUser().then(() => console.log('Disconnected'));
        }
    };
  }, []);

  const handleChannelSelect = (channel) => {
    setSelectedChannel(channel);
  };

  return (
    <Chat client={chatClient} theme="messaging light">
      <div className="chat-search-page">
        {/* Search input and logic here */}
        
        {/* List of chat channels */}
        <ChannelList
          client={chatClient}
          Preview={(props) => (
            <ChannelPreviewMessenger
              {...props}
              onSelect={() => handleChannelSelect(props.channel)}
            />
          )}
        />
        
        {/* Selected chat channel messages */}
        {selectedChannel && (
          <Channel channel={selectedChannel}>
            <MessageList />
            <MessageInput />
          </Channel>
        )}
      </div>
    </Chat>
  );
};

export default ChatSearch;
