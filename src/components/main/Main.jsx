import React, { useState } from "react";
import TopBar from "./TopBar";
import LeftMenu from "./LeftMenu";
import navigationMenu from "../../configs/navigationMenu";

const Main = ({ children }) => {
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(true);

  const handleToggleLeftMenu = () => setLeftMenuIsOpen(!leftMenuIsOpen);

  return (
    <>
      <TopBar toggleMenu={handleToggleLeftMenu} />
      <LeftMenu toggleMenu={handleToggleLeftMenu} open={leftMenuIsOpen} list={navigationMenu()} />
      {children}
    </>
  );
};

export default Main;
