import React from 'react';

const friends = ["Austin Powers"]

const FriendList = (props) => {
  const friendMap = friends.map(friend => {
    return <li>{friend}</li>
  });
  return (
    <ul>
      {friendMap}
    </ul>
  );
}

export default FriendList;
