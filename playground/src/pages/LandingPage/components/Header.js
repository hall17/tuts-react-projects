import { AppBar, Collapse, IconButton, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import SortIcon from "@mui/icons-material/Sort";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },
  appbar: {
    background: "none !important",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  appbarTitle: {
    flexGrow: 1,
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    color: "#fff",
    fontSize: "4.5rem",
  },
  goDown: {
    color: "#5aff3d",
    fontSize: "4rem",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Island.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedSize={150}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            My
            <span className={classes.colorText}>Island.</span>
          </h1>
          <Scroll to="place-to-visit" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>

          </Scroll>
        </div>
      </Collapse>
    </div>
  );
};

export default Header;
