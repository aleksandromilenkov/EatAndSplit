import React, { useContext } from "react";
import { ItemsContext } from "../App";

const FormSplitABill = () => {
  const [friends, setFriends, selectedFriend, setSelectedFriend] =
    useContext(ItemsContext);
  const splitABillHandler = (e) => {
    e.preventDefault();
    let value = 0;
    const billValue = +e.target.billValue.value;
    const yourExpenses = +e.target.yourExpenses.value;
    const whoIsPayingTheBill = e.target.whoIsPayingTheBill.value;
    if (whoIsPayingTheBill === "You") {
      value = billValue - yourExpenses;
    } else {
      value = -yourExpenses;
    }
    setSelectedFriend(null);
    setFriends((prevState) =>
      prevState.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };
  return (
    <div>
      <h2>SPLIT A BILL WITH {selectedFriend.name}</h2>
      <form action="" className="form-split-bill" onSubmit={splitABillHandler}>
        <label htmlFor="billValue">💰 Bill Value</label>{" "}
        <input type="number" name="billValue" id="billValue" />
        <label htmlFor="yourExpenses">🧍‍♀️Your Expenses</label>{" "}
        <input type="number" name="yourExpenses" id="yourExpenses" />
        <label htmlFor="whoIsPayingTheBill">
          🤑Who is paying the bill?
        </label>{" "}
        <select name="whoIsPayingTheBill" id="whoIsPayingTheBill">
          <option>You</option>
          <option>{selectedFriend.name}</option>
        </select>
        <button className="button">Split bill</button>
      </form>
    </div>
  );
};

export default FormSplitABill;
