import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from 'axios'
import Cookies from 'js-cookie'
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading]=useState(false)
  const handleLogout=async()=>{
    // setLoading(true)
    try{
      await axios.post("https://tg-app-i3re.onrender.com/api/user/logout")
      localStorage.removeItem("ChatApp")
      // Cookies.remove("jwt")    
      // already removed it in backend so this is optional
      setLoading(true)
      // alert("Logged out successfully")
      toast.success("Logged out successfully")
      window.location.reload()
    } catch(error){
      toast.error("Error in logging out")
      // console.log("Error in logout: ", error)
    }
  }
  return (
    <div className="h-[10vh]">
      <div>
        <BiLogOutCircle className=" text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full px-2 ml-3 mt-2" onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Logout;
