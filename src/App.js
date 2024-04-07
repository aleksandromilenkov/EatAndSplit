import React, { useState, createContext } from "react";
import FriendList from "./Components/FriendList";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitABill from "./Components/FormSplitABill";
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
export const ItemsContext = createContext({
  friends: [],
  setFriends: () => {},
  selectedId: null,
  setSelectedFriend: () => {},
});

const App = () => {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [addFriendIsOpen, setAddFriendsIsOpen] = useState(false);
  return (
    <div className="app">
      <ItemsContext.Provider
        value={[friends, setFriends, selectedFriend, setSelectedFriend]}
      >
        <h1>Eat n' split</h1>
        <div class="sidebar">
          <FriendList friends={friends} />
          {addFriendIsOpen && (
            <FormAddFriend onAddFriendsIsOpen={setAddFriendsIsOpen} />
          )}
          {addFriendIsOpen ? (
            <button
              className="button"
              style={{ fontSize: "1.4rem" }}
              onClick={() => setAddFriendsIsOpen(false)}
            >
              Close
            </button>
          ) : (
            <button
              className="button"
              style={{ fontSize: "1.4rem" }}
              onClick={() => setAddFriendsIsOpen(true)}
            >
              Add Friend
            </button>
          )}
        </div>
        {selectedFriend && <FormSplitABill key={selectedFriend.id} />}
      </ItemsContext.Provider>
    </div>
  );
};

export default App;
