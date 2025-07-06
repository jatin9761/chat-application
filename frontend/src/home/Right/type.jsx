import React from 'react'
import { VscSend } from "react-icons/vsc";

function type() {
  return (
    <>
      <div className='flex space-x-3 h-[6vh] text-center bg-gray-600'>
        <div className="w-[90%] mx-15 ">
        <input type="text" placeholder="Type here" className="border-[1px] border border-gray-700 bg-slate-900  flex items-center w-full py-3 px-3 rounded-xl grow outline-none bg-slate-900 mt-1 " />

        
      </div>
      <button className='text-3xl'>
            <VscSend />
        </button>
      </div>
    </>
  );
}

export default type
