import React, { useState } from "react";

const Event = () => {
  const [number, setNumber] = useState(0);
  const handleIncrease = () => {
    setNumber(number + 1);
  };
  const handleDecrease = () => {
    setNumber(number - 1);
    if (number == 0) {
      setNumber(0);
    }
  };

  const [name, setName] = useState("Olamide");
  const handleChange = () => {
    // setName("Dunmola");
    setName(user);
    console.log(name);
  };
 
  const [user, setUser] = useState("")
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-3xl">{name}</h1>
      <button onClick={handleChange} className="bg-green rounded p-5 text-red">
        Change Name
      </button>
      <h1 className="text-3xl">{number}</h1>
      <div className="flex gap-2">
        <button onClick={handleDecrease} className="bg-green rounded p-3">
          Decrease
        </button>
        <button
          onClick={handleIncrease}
          className="bg-yellow rounded p-3 text-red"
        >
          Increase
        </button>
      </div>

      <input
        type="text"
        className="border-2"
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  );
};

export default Event;
