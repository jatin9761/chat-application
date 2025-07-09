import React from "react";
import Search from "./Search";
import Users from "./Users";



export default function left() {
  return (
    <div className=' w-1/5 h-screen bg-gray-700 text-white'> 

    <h1 className="font-bold text-3xl p-2 px-12">  Chats</h1>
    
    <Search></Search>
    <hr></hr>
    <Users> </Users>
    </div>
  );
}