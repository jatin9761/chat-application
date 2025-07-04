import React from "react";
import { MdOutlineSearch } from "react-icons/md";
function search() {
  return (
   <div className="h-[10vh]">
     <div className="px-6 py-5">
      <from action="">
        
        <div className="flex space-x-3">
          
           <level className="border-[1px] border border-gray-700 bg-slate-900   rounded-lg flex items-center gap-2 w-[100%]  p-3">
  
  <input type="text" className="grow outline-none bg-slate-900" placeholder="Search or start a new chat" />
  
</level>
          <button> <MdOutlineSearch  className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300"/>
          </button>
          
        </div>
      </from>
    </div>
   </div>
  );
}

export default search;
