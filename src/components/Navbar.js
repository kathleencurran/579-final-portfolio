import { Header } from "grommet";
// import { Link, NavLink } from "react-router-dom";
import { Grid, Row, Col } from "react-flexbox-grid";
import { AppBar } from "@mui/material";
import { Typography, Box, Toolbar, Button, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "2rem!important",
    color: "#141B41!important",
    fontWeight: "700!important",
  },
  header: {
    justifyContent: "right",
    backgroundColor: "#B8C9E6",
    alignContent: "space-between",
    height: "3rem",
  },
  button: {
    fontSize: "1.1rem!important",
    width: "10rem",
    fontWeight: "700!important",
    height: "3rem",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={classes.root} position="static">
          <Toolbar className={classes.header}>
            <Button className={classes.button} href="/" color="inherit">
              Home
            </Button>
            <Button className={classes.button} href="projects" color="inherit">
              Projects
            </Button>
            <Button className={classes.button} href="/about-me" color="inherit">
              About
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;