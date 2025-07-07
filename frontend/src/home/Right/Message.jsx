import React from "react";

function Message() {
  return (
    <div className="flex-grow p-4 space-y-3 overflow-y-auto">
      <div className="chat chat-start">
        <div className="chat-bubble bg-pink-400 text-black">hii !</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-sky-300 text-black">kon ?</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-bubble bg-sky-400 text-black">aap ka dost</div>
      </div>
    </div>
  );
}

export default Message;
