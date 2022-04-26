import { Box, Typography } from "@mui/material";
import { Grid, Row, Col } from "react-flexbox-grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    height: "10rem",
    backgroundColor: "#141B41",
    color: "white",
    marginTop: "5rem",
    bottom: "0",
  },
  contact: {
    fontSize: "1.5rem",
    fontWeight: "700",
    paddingTop: ".5rem",
    textAlign: "center",
  },
  grid: {
    width: "45%",
    margin: "auto",
  },
  row: {
    justifyContent: "space-around",
    width: "auto",
    marginTop: "1rem",
    fontSize: "2rem!important",
  },
  link: {
    color: "aliceblue",
    "&:hover": {
      color: "#306BAC",
      fontWeight: "700",
      fontSize: "1rem",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <Typography className={classes.contact}>Contact Me!</Typography>
        <Grid className={classes.grid} fluid>
          <Row className={classes.row}>
            <Col>
              <Typography>
                <b>Email</b>: kacurran@umich.edu
              </Typography>
            </Col>
            <Col>
              <Typography>
                <b>Phone</b>: (314) 623-7944
              </Typography>
            </Col>
          </Row>
          <Row className={classes.row}>
            <Col>
              <Typography>
                Or connect with me on{" "}
                <a
                  className={classes.link}
                  href="https://www.linkedin.com/in/kcurran11/"
                >
                  LinkedIn
                </a>
              </Typography>
            </Col>
          </Row>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
