import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const CheckPassword = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitfunc = async (e) => {
    console.log("Logiine");
    try {
      let passwordData = {
        password: password,
      };
      e.preventDefault();
      let getpassword = await axios.post(
        "https://bus-serivices.onrender.com/api/v1/password/get-password",
        JSON.stringify(passwordData),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      //   console.log(getpassword);
      if (getpassword.status == 200) {
        sessionStorage.setItem("password", "success");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen pt-40 ">
      <form onSubmit={onSubmitfunc} className="form_password mx-auto">
        <h1 className="text-2xl text-center py-4">Password</h1>
        <div className="flex flex-col justify-center">
          <label htmlFor="password" className="text-left">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-primary w-full rounded-md">Submit</button>
        </div>
      </form>
    </div>
  );
};
