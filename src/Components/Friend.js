import React, { useContext, useState } from "react";
import { ItemsContext } from "../App";

const Friend = ({ friend }) => {
  const [friends, setFriends, selectedFriend, setSelectedFriend] =
    useContext(ItemsContext);
  let message =
    friend.balance === 0 ? (
      <p>You and {friend.name} are even</p>
    ) : friend.balance < 0 ? (
      <p className="red">
        You owe {friend.name} {Math.abs(friend.balance)}€
      </p>
    ) : (
      <p className="green">
        {friend.name} owes you {Math.abs(friend.balance)}€
      </p>
    );
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
