import React from 'react'
import Chatuser from './chatuser'
import Messages from './messages'
import Type from './type'


export default function Right() {
  return (
    <div className=' w-3/4 h-screen  bg-slate-500 text-white'>
      
      <Chatuser></Chatuser>
      <div style={{maxheight:"calc(92vh - 8vh)"}} className=' my-6 flex jatin overflow-y-auto'>
      <Messages></Messages>
      
      </div>
      <Type></Type>
      
    </div>
  )   
}
