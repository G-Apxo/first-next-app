import React from "react";
import Link from "next/link";
const Sidebar = () => {
  return (
    <div className="h-screen  w-[250px] bg-black">
      <div className="flex justify-between items-center py-5 flex-col h-full">
        {/*Logo handler */}
        <div className="flex">Logo</div>
        {/*Menu handler */}
        <div className="flex flex-col">
          <ul className="text-white flex gap-5 flex-col ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/testyourself">Test Yourself</Link>
            </li>
            <li>
              <Link href="/login">Become an Editor</Link>
            </li>
          </ul>
        </div>
        {/*Logout handler */}
        <div className="flex">
          <button className="text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
