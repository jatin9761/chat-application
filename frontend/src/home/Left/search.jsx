import React from "react";
import { MdOutlineSearch } from "react-icons/md";
function search() {
  return (
    <div className="px-6 py-4">
      <from action="">
        
        <div className="flex space-x-3">
          
           <level className="border-[1px] border border-gray-700 bg-slate-900   rounded-lg flex items-center gap-2 w-[80%]  p-3">
  
  <input type="text" className="grow outline-none bg-slate-900" placeholder="Serch" />
  
</level>
          <button> <MdOutlineSearch  className="text-5xl p-2 hover:bg-gray-600 rounded-lg full duration-300"/>
          </button>
          
        </div>
      </from>
    </div>
  );
}

export default search;
