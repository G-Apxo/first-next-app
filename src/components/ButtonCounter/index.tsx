"use client";

import React, { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      count {count}
    </button>
  );
};

export default ButtonCounter;
