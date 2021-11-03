import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/outline";

const AppBarWithBackButton = () => {
  let history = useHistory();

  return (
    <nav className="bg-white shadow-lg">
      <button
        className="material-icons text-green-400 p-4"
        onClick={() => history.goBack()}
      >
        <ArrowLeftIcon
          className="flex-shrink-0 h-6 w-6 text-green-400"
          aria-hidden="true"
        />
      </button>
    </nav>
  );
};

export default AppBarWithBackButton;
