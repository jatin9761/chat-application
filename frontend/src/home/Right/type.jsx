import React from "react";
import { VscSend } from "react-icons/vsc";

function type() {
  return (
    <>
      <div className="flex space-x-3 h-[6vh] text-center bg-gray-600 fixed bottom-0 left-50% w-full px-22 ">
        <div className="w-[calc(80%-70px)]">
          <input
            type="text"
            placeholder="Type  here "
            className="border-[1px] border border-gray-700 bg-gray-600 flex items-center w-full py-5 px-5 rounded-xl grow outline-none mt-1  hover:bg-gray-700 "
          />
        </div>
        <button className="text-2xl mt-1 px-10  hover:bg-gray-700 rounded-full duration-300 ">
          <VscSend />
        </button>
      </div>
    </>
  );
}
export default type;
