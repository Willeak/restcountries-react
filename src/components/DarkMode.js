import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as solidMoon } from "@fortawesome/free-solid-svg-icons";
import { faMoon as regularMoon } from "@fortawesome/free-regular-svg-icons";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeStored = localStorage.getItem("isDarkMode");
    if (isDarkModeStored) {
      setIsDarkMode(JSON.parse(isDarkModeStored));
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(newDarkMode));
    document.body.dataset.darkMode = newDarkMode;
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.dataset.darkMode = "true";
    } else {
      document.body.dataset.darkMode = "false";
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleDarkMode} className="darkmode">
      {isDarkMode ? (
        <>
          <FontAwesomeIcon icon={solidMoon} /> Dark mode
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={regularMoon} /> Dark mode
        </>
      )}
    </button>
  );
};

export default DarkModeToggle;
