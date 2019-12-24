import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TopBar from "./TopBar";
import LeftMenu from "./LeftMenu";
import navigationMenu from "../../configs/navigationMenu";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(2)
  }
}));

const Main = ({ title, component, ...props }) => {
  const classes = useStyles();
  const [leftMenuIsOpen, setLeftMenuIsOpen] = useState(false);
  const Component = component;

  const handleToggleLeftMenu = () => setLeftMenuIsOpen(!leftMenuIsOpen);

  console.log(props);
  return (
    <>
      <TopBar title={title} toggleMenu={handleToggleLeftMenu} />
      <LeftMenu toggleMenu={handleToggleLeftMenu} open={leftMenuIsOpen} list={navigationMenu()} />
      <div className={classes.root}>
        <Component />
      </div>
    </>
  );
};

export default Main;
