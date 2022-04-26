import {} from "@material-ui/core";
import { Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import huddle from "../huddle_info.json";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
    marginBottom: "2rem",
    marginLeft: "2rem",
  },
  text: {
    width: "60%",
    margin: "auto",
  },
  header: {
    textAlign: "center",
  },
}));

const Huddle = () => {
  const huddleContent = huddle.huddleInfo;
  const classes = useStyles();

  return (
    <>
      <h1 className={classes.header}>
        Huddle: An app that brings students together
      </h1>
      <Box className={classes.root}>
        <h3>Time frame: 5 months</h3>
        <h3>Role: UX Designer</h3>
        <Typography>
          <b>Skills</b>: Interaction design, personas, storymapping,
          wireframing, prototyping
        </Typography>
      </Box>
      <Box className={classes.text}>
        <Typography>{huddleContent[0].huddleBackground}</Typography> <br></br>
        <Typography>{huddleContent[1].framing}</Typography>
      </Box>
    </>
  );
};

// Okay I need a text field and a place to put the comments

export default Huddle;
