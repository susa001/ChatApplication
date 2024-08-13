import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Registrationsuccessful()
{
  const navigate = useNavigate();
//regestration successfull message page
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

    return(
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <div className="green-500 text-5xl">
          &#10003;
        </div>
        <div className="text-xl font-bold">
          Successfully Registered
        </div>
      </div>
    </div>
    );

        
    
}
export default Registrationsuccessful;