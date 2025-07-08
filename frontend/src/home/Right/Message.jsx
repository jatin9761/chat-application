import React from "react";

function Message() {
  return (
    <>
      <div className="flex items-center justify-start my-2">
        <div className="bg-blue-700 text-white p-3 rounded-lg max-w-xs">
          <p>Hello, how are you?</p>
        </div>
      </div>
      <div className="flex items-center justify-end my-2">
        <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
          <p>I'm fine, thank you!</p>
        </div>
      </div>
    </>
  );
}

export default Message;
