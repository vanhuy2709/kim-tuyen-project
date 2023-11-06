import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const MaybeShowNavbar = ({ children }) => {
  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    if (location.pathname === "/about/heineken") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return <div>{showNavbar && children}</div>;
};

export default MaybeShowNavbar;
