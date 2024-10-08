import { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";
// import "./Home.css";

function Home() {
  const [currentview, setCurrentView] = useState("register");

  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  return (
    <div className="h-screen flex justify-center items-center bg-gray-200">
        <div className="absolute inset-0 bg-[url('/images/bg-img.jpeg')] bg-cover bg-center opacity-30"></div>
      <div className="bg-white p-10 w-1/4 rounded-xl drop-shadow-xl">
        <h1 className="text-5xl text-center font-semibold p-5 text-indigo-700">QUIZIFY</h1>
        <div className="flex justify-center gap-5">
          <button className="rounded-md bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-500 hover:text-indigo-50" onClick={() => handleViewChange("register")}>
            Sign Up
          </button>
          <button className="rounded-md bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20 hover:bg-indigo-500 hover:text-indigo-50" onClick={() => handleViewChange("login")}>
            Login
          </button>
        </div>

      {currentview == "register" && <Register />}
      {currentview == "login" && <Login />}
      </div>
    </div>
  );
}

export default Home;
