import React, { useState, useEffect } from 'react';
import { Chat, Channel, MessageList, MessageInput, ChannelList, ChannelPreviewMessenger } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

// Replace with your Stream Chat API key
const chatClient = StreamChat.getInstance('your-api-key');

const ChatSearch = () => {
  const [selectedChannel, setSelectedChannel] = useState(null);

  useEffect(() => {
    const fetchTokenAndConnect = async () => {
      // Use the first user's credentials for demonstration
      const firstUserId = 1;  // Assuming the first user ID in your users.json
      const firstUserPassword = 'secure';  // Corresponding password

      try {
        const response = await fetch('http://localhost:5000/stream-token', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ user_id: firstUserId, password: firstUserPassword })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch token');
        }

        const { token, user } = await response.json();

        await chatClient.connectUser(
          {
            id: `user-${user.id}`,
            name: user.name,
            image: user.profilePicUrl  // Use the profile picture URL from your user data
          },
          token
        );

        console.log('Connection successful');
      } catch (err) {
        console.error('Error connecting to chat:', err);
      }
    };

    fetchTokenAndConnect();

    return () => {
      chatClient.disconnectUser();
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
