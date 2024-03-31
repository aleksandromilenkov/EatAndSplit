import React from "react";
import Friend from "./Friend";

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map((friend, idx) => (
        <Friend friend={friend} key={idx} />
      ))}
    </ul>
  );
};

export default FriendList;
