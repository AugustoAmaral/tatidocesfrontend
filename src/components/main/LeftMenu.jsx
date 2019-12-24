import React from "react";
import Logo from "../../images/logo sem fundo sem borda.png";
import { Divider, Grid, ListSubheader, List, makeStyles, SwipeableDrawer } from "@material-ui/core";
import DrawerListItem from "../common/DrawerListItem";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  list: {
    width: drawerWidth,
    overflowY: "auto"
  },
  divider: {
    marginTop: "1em"
  }
}));

const LeftMenu = ({ open, toggleMenu, list }) => {
  const classes = useStyles();
  return (
    <SwipeableDrawer open={open} onOpen={toggleMenu} onClose={toggleMenu}>
      <Grid container direction="column" alignItems="center">
        <img alt="Tizir" src={Logo} style={{marginTop: 16, marginBottom: 32}} height="120px" />
      </Grid>
      <List className={classes.list}>
        {list.map((item, i) => {
          if (item.canList) {
            return (
              <div key={i}>
                {item.type && <ListSubheader> {item.type} </ListSubheader>}
                {item.title && <DrawerListItem onClose={toggleMenu} {...item} />}
                {item.divider && <Divider className={classes.divider} />}
              </div>
            );
          } else return <div key={i} />;
        })}
      </List>
    </SwipeableDrawer>
  );
};

export default LeftMenu;
