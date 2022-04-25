import {
  FormControl,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Box, Button } from "@mui/material";

import { useEffect } from "react";
import { useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  error: {
    color: "red",
  },
  commentsBox: {
    margin: "auto",
    paddingTop: "3rem",
    width: "30rem",
  },
  textEntry: {
    width: "30rem",
  },
  header: {
    textAlign: "center",
    marginTop: "2rem",
  },
  pg: {
    width: "60%",
    margin: "auto",
  },
  wholeQuote: {
    display: "block",
    padding: "4rem 1rem",
    margin: "auto",
    maxWidth: "30%",
    position: "relative",
    textAlign: "center",
  },
  blockquote: {
    display: "inline-block",
    margin: "0",
    padding: "1rem",
    position: "relative",
    "&:before ": {
      fontFamily: "sans-serif",
      color: "#306BAC",
      content: "open-quote",
      fontSize: "4rem",
      left: "0",
      top: "7rem",
      lineHeight: ".75rem",
      position: "absolute",
      transform: "scale(3, 6)",
      transformOrigin: "top",
    },
    "&:after ": {
      fontFamily: "sans-serif",
      color: "#306BAC",
      content: "close-quote",
      fontSize: "4rem",
      right: "0",
      top: "7rem",
      lineHeight: ".75rem",
      position: "absolute",
      transform: "scale(3, 6)",
      transformOrigin: "top",
    },
  },
  cite: {
    color: "#757575",
    fontSize: "small",
    display: "block",
    fontStyle: "italic",
    textAlign: "right",
    paddingTop: ".5rem",
    paddingRight: "2.5rem",
    textTransform: "uppercase",
  },
  text: {
    padding: "0 2em",
  },
}));

const Homepage = () => {
  const classes = useStyles();
  const [commentInput, setCommentInput] = useState("");
  const [isSwear, setIsSwear] = useState(false);
  const [feedback, setFeedback] = useState({
    name: "",
    comment: "",
  });
  // const [wisdomList, setWisdomList] = useState("");
  const [wisdom, setWisdom] = useState({});
  const [randomEntry, setRandomEntry] = useState(0);

  const swearList = ["crap", "damn", "shit", "fuck", "suck", "stinks"];
  const textRef = useRef();
  const nameRef = useRef();
  const [keyNum, setKeyNum] = useState(0);

  const handleSwears = (input, swears) => {
    console.log(input);
    const commentArr = input.split(" ");
    return commentArr.some((word) => swears.includes(word));
  };

  const handleComment = () => {
    if ((nameRef.current.value && textRef.current.value) !== "") {
      if (handleSwears(commentInput, swearList) === true) {
        setIsSwear(true);
      } else {
        setFeedback({
          name: nameRef.current.value,
          comment: textRef.current.value,
        });
        setKeyNum(localStorage.length);
        setIsSwear(false);
        textRef.current.value = "";
        nameRef.current.value = "";
      }
    } else {
      console.log("no input");
    }
  };

  const setStorage = () => {
    console.log("storage set");
    localStorage.setItem(keyNum, JSON.stringify(feedback));
  };

  const setZero = () => {
    localStorage.removeItem("8");
  };

  useEffect(() => {
    setStorage();
    console.log(keyNum, "has changed");
  }, [keyNum]);

  useEffect(() => {
    console.log(randomEntry, "random entry");
    console.log(JSON.parse(localStorage.getItem(randomEntry)));
    setWisdom(JSON.parse(localStorage.getItem(randomEntry)));
  }, [randomEntry]);

  const sorry = () => {
    console.log("running sorry");
    setIsSwear(false);
    textRef.current.value = "";
    nameRef.current.value = "";
  };

  useEffect(() => {
    console.log(wisdom);
  }, [wisdom]);

  useEffect(() => {
    setRandomEntry(Math.floor(Math.random() * (localStorage.length - 1)) + 1);
  }, []);

  return (
    <>
      {/* <Button onClick={setZero}>Set 0</Button> */}
      <h1 className={classes.header}>Kathleen Curran</h1>
      <h3 className={classes.header}>
        UX Researcher, Designer, and Software Engineer
      </h3>
      <br></br>
      <Typography className={classes.pg}>
        I believe in the power of connections and how important it is to share
        knowledge. So I've shared below some nuggets of wisdom. Please feel free
        to leave any wisdom or knowledge you have gained below so others can
        benefit too.{" "}
      </Typography>
      <Box className={classes.wholeQuote}>
        {randomEntry != 0 ? (
          <>
            <blockquote className={classes.blockquote}>
              <Typography className={classes.text}>{wisdom.comment}</Typography>
              <cite className={classes.cite}> {wisdom.name}</cite>
            </blockquote>
          </>
        ) : (
          ""
        )}
      </Box>
      <Box className={classes.commentsBox}>
        <h2>Leave some wisdom!</h2>
        <FormControl>
          <TextField
            required
            className={classes.textEntry}
            id="outlined-required"
            label="Name"
            placeholder="John Doe"
            inputRef={nameRef}
          ></TextField>
          <br></br>
          {isSwear ? (
            <>
              {" "}
              <Typography className={classes.error}>
                Try again when you can be nice.
              </Typography>
              <TextField
                className={classes.textEntry}
                id="outlined-multiline-static"
                placeholder="Add your comment here"
                multiline
                error
                inputRef={textRef}
                maxRows={6}
                onChange={(e) => setCommentInput(e.target.value)}
              ></TextField>
              <Button disabled onClick={() => handleComment()}>
                {" "}
                Submit Comment
              </Button>{" "}
              <Button variant="primary" onClick={() => sorry()}>
                I'm Sorry{" "}
              </Button>
            </>
          ) : (
            <>
              <TextField
                id="outlined-multiline-static"
                placeholder="Add your comment here"
                multiline
                inputRef={textRef}
                maxRows={6}
                onChange={(e) => setCommentInput(e.target.value)}
              ></TextField>
              <Button variant="primary" onClick={() => handleComment()}>
                {" "}
                Submit Comment
              </Button>{" "}
            </>
          )}
        </FormControl>
      </Box>
    </>
  );
};

export default Homepage;
