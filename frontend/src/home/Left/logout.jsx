import React from 'react'
import { RiLogoutCircleLine } from "react-icons/ri";


export default function logout() {
  return (
    <div className=' w-[3%] h-screen  bg-slate-900  text-white flex flex-col justify-end'>
      
      

       <div className="p-3 align-button">
            <from action="">
              
              <div className="flex space-x-3">
                
                 
                <button> 
                <RiLogoutCircleLine className="text-5xl p-2 hover:bg-gray-600 rounded-full duration-300" />
                </button>
                
              </div>
            </from>
          </div>
      
    </div>
  )
}
 