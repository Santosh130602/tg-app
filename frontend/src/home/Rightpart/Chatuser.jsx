import React from "react";
import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";


function Chatuser() {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "Online" : "Offline";
  };
  const isOnline=getOnlineUsersStatus(selectedConversation._id)=="Online" ? "online" : ""


  console.log(selectedConversation);
  return (
    <div className="relative flex items-center h-[8%] justify-center gap-4 bg-gray hover:bg-one duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-5"
      >
        <CiMenuFries className="text-white text-xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center h-[8vh]">
        <div className={`avatar ${isOnline}`}>
        {/* <div className="avatar online"> */}
          <div className="w-16 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>{" "}
        <div>
          <h1 className=" text-lg">{selectedConversation.fullname}</h1>
          <span className=" text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Chatuser;
