import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { StreamChat } from 'stream-chat';
import 'stream-chat-react/dist/css/index.css';

const MemberListPage = () => {
    const location = useLocation();
    const members = Object.keys(location.state.members_dict)

    return (
        <div>YOU REACHED MEMBERS LIST {members}</div>
    );

//   const client = StreamChat.getInstance(process.env.REACT_APP_STREAM_API_KEY);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       const channel = client.channel('messaging', channelId);
//       const response = await channel.queryMembers({});
//       setMembers(response.members);
//     };

//     fetchMembers();
//   }, [channelId, client]);

//   return (
//     <div className="member-list-container">
//       <div className="member-list-header">Participants</div>
//       <ul className="member-list">
//         {members.map((member) => (
//           <li key={member.user.id} className="member-item">
//             <img src={member.user.image} alt={member.user.name} className="member-image" />
//             <div className="member-info">
//               <div className="member-name">{member.user.name}</div>
//               <div className="member-status">{member.user.online ? 'online' : 'offline'}</div>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
};

export default MemberListPage;
