import React, { useContext, useState } from "react";
import { ItemsContext } from "../App";

const Friend = ({ friend }) => {
  const [friends, setFriends, selectedFriend, setSelectedFriend] =
    useContext(ItemsContext);
  let message =
    friend.balance === 0
      ? `You are even with ${friend.name}`
      : friend.balance < 0
      ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
      : `${friend.name} owes you ${Math.abs(friend.balance)} $`;
  return (
    <li>
      <img src={`${friend.image}`} alt={`${friend.name}`} />
      <div>
        <h3>{friend.name}</h3>
        <p>{message}</p>
      </div>
      <button
        className="button"
        onClick={() => {
          setSelectedFriend(friend);
        }}
      >
        {selectedFriend?.id === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
};

export default Friend;
