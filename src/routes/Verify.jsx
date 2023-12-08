import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const [pin, setPin] = useState("");
  const history = useNavigate(); // Initialize history hook for redirection
  const { userId } = useParams();

  const handleVerification = async () => {
    try {
      const response = await fetch(
        `https://agrolux.onrender.com/api/user/confirm/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pin }),
        }
      );

      if (response.ok) {
        console.log("Email verified successfully!");
        // Redirect the user to the dashboard upon successful verification
        history("/dashboard");
      } else {
        console.error("Email verification failed");
      }
    } catch (error) {
      console.error("Error during email verification:", error);
    }
  };
  const handlePinChange = (e) => {
    // Update the pin state when the input value changes
    setPin(e.target.value);
  };

  const handleResendPin = async () => {
    // Logic to resend the pin to the user's email
  };

  return (
    <div className="flex items-center justify-center bg-[#204E51] h-[100vh] px-[20px] max-md:px-[10px]">
      <div className="h-[70%] bg-white w-[100%] max-w-[650px] rounded-[20px] px-[55px] py-[38px] max-md:px-[20px]">
        <h1 className="text-[50px] text-[#204e51]">Verify Email</h1>
        <div className="flex  mt-[50px]  flex-col items-start justify-center">
          <input
            type="number"
            placeholder="Pin"
            value={pin} // Set the value of the input to the pin state
            onChange={handlePinChange}
            className="h-[60px] w-full  mt-[20px] border rounded-[8px] p-[10px]"
          />
          <p className="text-[15px] font-thin text-start mt-[15px]">
            A six digit pin has been sent to your email.
            <br />
            Please check and enter again.
          </p>
        </div>
        <div className="flex flex-col mt-[50px]">
          <div
            className="w-full h-[60px] rounded-[20px] text-[white] bg-[#204e51] text-[20px] flex items-center justify-center my-[15px] cursor-pointer  max-md:text-[16px]"
            onClick={handleVerification}
          >
            Submit
          </div>
          <div
            className="w-full h-[60px] rounded-[20px] text-[#204e51] border-[#204e51] border text-[20px] flex items-center justify-center my-[15px] cursor-pointer  max-md:text-[16px]"
            onClick={handleResendPin}
          >
            Resend Pin
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
