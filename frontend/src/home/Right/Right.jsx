import React from 'react'
import Chatuser from './chatuser'
import Messages from './Messages'
import Type from './type'


export default function Right() {
  return (
    <div className=' w-3/3 h-screen  bg-slate-500 text-white flex flex-col justify-between'>
      
      <Chatuser></Chatuser>
      <div 
      style={{maxheight:"calc(100vh - 6vh -8vh)"}} className=' my-2 px-2 flex-jatin overflow-y-auto'>
      <Messages></Messages>
      
      </div>
      <Type></Type>
      
    </div>
  )   
}
