import React, { useContext } from "react";
import { ItemsContext } from "../App";

const FormAddFriend = ({ onAddFriendsIsOpen }) => {
  const [friends, setFriends, selectedFriend, setSelectedFriend] =
    useContext(ItemsContext);
  const friendAddHandler = (e) => {
    e.preventDefault();
    if (!e.target.friendName.value) return;
    const id = crypto.randomUUID();
    const name = e.target.friendName.value;
    const image = e.target.friendUrl.value;
    setFriends((prevState) => [
      ...prevState,
      {
        id: id,
        name: name,
        balance: 0,
        image: image ? image : `https://i.pravatar.cc/48?=${id}`,
      },
    ]);
    e.target.friendName.value = "";
    e.target.friendUrl.value = "";
    onAddFriendsIsOpen(false);
  };
  return (
    <div className="form-add-friend">
      <form className="form-add-friend" onSubmit={friendAddHandler}>
        <label htmlFor="friendName">👫Friend Name</label>{" "}
        <input type="text" name="friendName" id="friendName" />
        <label htmlFor="friendUrl">🌄Image URL</label>{" "}
        <input type="url" name="friendUrl" id="friendUrl" />
        <button className="button">Add</button>
      </form>
    </div>
  );
};

export default FormAddFriend;
