import React from 'react';

const FriendList = ({friends}) => {
  const friendMap = friends.map(friend => {
    return (
      <li>
        {friend.name}, {friend.age} years old, {friend.email}
      </li>
    )
  });
  return (
    <ul>
      {friendMap}
    </ul>
  );
}

export default FriendList;
