import React from "react";
import LoginTabs from "./LoginTabs.js";

const Login = () => {
  return (
    <>
      <div className=" bg-white  mx-auto w-[95vw] h-[70vh] mt-20 md:block hidden rounded">
       
        
        <p className="px-10 pt-[63vh] text-gray-800 font-semibold">Need help? <a className="text-blue-600">Contact Us</a></p>
    
        
      </div>

      <LoginTabs />
      
    </>
  );
};
export default Login;
