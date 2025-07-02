import React from "react";
import Search from "./Search";



export default function left() {
  return (
    <div className=' w-1/4 h-screen bg-blue-600 text-white'> 

    <h1 className="font-bold text-3xl p-2 px-11">  Chats</h1>
    
    <Search></Search>
    
    </div>
  );
}
