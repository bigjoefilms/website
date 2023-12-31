import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";




const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const JWT_SECRET = 'fuegfyefgwrgty9t3ur9giht4toyogytt674'
  const [state, setState] = useState(false)
  const { login } = useAuth();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    
    try {
      setState(true);
      const response = await fetch(
        "https://agrolux.onrender.com/api/user/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${JWT_SECRET}`
          },
          body: JSON.stringify({ password ,email}),
        }
      );
    
      // Assuming successful login results in a response with a token or success flag
      if (response.ok) {
        // Redirect to the dashboard after successful login
        // const { userId } = await response.json();
        const userData  = await response.json(); 
        const userId = userData.userId; // Assuming the token is returned in the response
      login(userId);
        

        console.log("User signed in successfully!");
       
        history('/dashboard');
      } else {
        // If response status is not OK, parse the error response
        const errorData = await response.json(); // Parse error response
  
        // Check if the errorData contains specific error messages
        if (errorData && errorData.error) {
          console.log("Login failed:", errorData.error);
          // Handle the error (show error message to the user, etc.)
        } else {
          console.log("Login failed: Unknown error");
          // Handle unknown or unexpected errors
        }
      }
    } catch (error) {
      // Handle errors (e.g., network issues, server errors, etc.)
      console.error("Login error:", error);
    }finally {
      setState(false); // Set loading state to false when login process ends
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px] flex-col">
      <Link to="/">
          <h1
            className="text-[#ffffff] font-bold text-[28px] p-[40px]
            "
          >
            Agrolux
          </h1>
        </Link>
      <div className="h-[70%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <div>
          <h1 className="text-[70px] text-[#204e51] font-semibold max-md:text-[50px]">
            Login
          </h1>
          <p className=" font-light text-[15px] ml-[10px]">Welcome Back</p>
        </div>
        <div className="flex flex-col mt-[43px] gap-9">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
        </div>
        <div className="flex items-center justify-between font-light mt-[30px] text-[16px] max-md:text-[13px] cursor-pointer" onClick={handleShowPassword}>
          <p
            className="flex gap-[8px] items-center"
           
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <rect x="0.5" y="0.5" width="19" height="19" stroke="#204E51" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.8225 6.02069L7.98362 14.8596L3.17847 10.0544L4.06235 9.17049L7.98362 13.0917L15.9385 5.13681L16.8225 6.02069Z"
                fill="#204E51"
              />
            </svg>
            Show Password
          </p>
          <p> Forgot Password</p>
        </div>
        
        <div
          className="w-full h-[60px] rounded-[20px] text-[white] bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer"
          onClick={handleLogin}
        >
       {state ? (
    <div className="spinner-container">
      <div className="spinner"></div>
    </div>
  ) : (
    "Login"
  )}
        </div>
        <p className="text-[15px] font-light">
          Dont have an account?{" "}
          <Link to="/signup">
         
            <span className="text-[#204e51] "> Sign Up</span>{" "}
           
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
