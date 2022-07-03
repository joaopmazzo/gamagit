import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import UserInfo from "./../Components/UserInfo";
import ReposList from "./../Components/ReposList";

export default function Repositories() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = "#5D54A4";

    let userDataStored = JSON.parse(localStorage.getItem("userData"));
    if (userDataStored) {
      setUserData(userDataStored.user);
      setRepositories(userDataStored.user.repositories.nodes);
    } else {
      navigate("/");
    }
  }, []);

  const handleReturnButton = (event) => {
    navigate("/");
  };

  return (
    <div className="text-white">
      <header className="sticky top-0 flex flex-col items-center justify-center h-16 w-full bg-gray-black rounded-b-lg drop-shadow-2x text-xl font-bold">
        <span>REPOSITORIES</span>
        <hr className="border-2 border-[#5D5FEF] w-32 absolute bottom-0" />
      </header>
      <main className="my-12">
        <UserInfo props={userData} />
        <ReposList props={repositories} />
        <button
          className="flex items-center justify-center m-auto h-12 w-28 bg-gray-black hover:bg-opacity-90 hover:drop-shadow-lg rounded-2xl"
          type="button"
          onClick={handleReturnButton}
        >
          Return
        </button>
      </main>
    </div>
  );
}
