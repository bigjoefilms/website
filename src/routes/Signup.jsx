import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch(
        "https://agrolux.onrender.com/api/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ fullName, email, password }),
        }
      );

      if (response.ok) {
        // Handle success (e.g., redirect to a success page or perform necessary actions)
        console.log("User signed up successfully!");
      } else {
        // Handle error (e.g., show error message to the user)
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px]">
      <div className="h-[70%] bg-white w-[100%] max-w-[650px]  rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <div>
          <h1 className="text-[70px] text-[#204e51] font-semibold max-md:text-[50px]">
            Sign Up
          </h1>
          <p className=" font-light text-[15px] ml-[10px]">Hello Welcome </p>
        </div>
        <div className="flex flex-col mt-[43px] gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="border border-black rounded-[20px] h-[60px] w-full px-[25px] text-[15px] text-black"
          />
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
        <div className="flex items-center justify-between font-light mt-[30px]">
          <p className="flex gap-[8px] items-center text-[16px] max-md:text-[13px]">
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
                onClick={handleShowPassword}
              />
            </svg>
            Show Password
          </p>
        </div>
        <div
          className="w-full h-[60px] rounded-[20px] text-[white] bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer  max-md:text-[16px]"
          onClick={handleSignUp}
        >
          Signup
        </div>
        <p className="text-[15px] font-light">
          {" "}
          Have an account?{" "}
          <Link to="/login">
            <span className="text-[#204e51] "> Login</span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
