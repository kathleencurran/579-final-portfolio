import { Box, Image, Paragraph } from "grommet";
import { Grid, Row, Col } from "react-flexbox-grid";

import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import {ExpandMoreIcon} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  text: {
    width: "100%",
    marginLeft: "3rem",
    marginTop: "0px",
  },
  accText: {},
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  row: {
    flexBasis: "100%",
    marginBottom: "2rem",
    width: "100%",
    justifyContent: "center",
  },
  grid: {
    width: "100%",
    marginBottom: "10rem",
  },
  image: {
    width: "600px",
    height: "400px",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <>
      <h1 className={classes.header}>About Me</h1>
      <Grid fluid className={classes.grid}>
        <Row className={classes.row}>
          <Col>
            <Box>
              <Image className={classes.image} src={"./headshot.JPG"} />
            </Box>
          </Col>
          <Col>
            <Box>
              <Paragraph className={classes.text}>
                My name is Kathleen Curran, and as someone who was fascinated by
                puzzles and technology when I was young, software engineering
                seemed like a natural path. But it wasn’t long till I realized
                that while I still loved puzzles and technology, I realized I
                wanted to work with users personally, understand their needs,
                and design useful and meaningful tech.
              </Paragraph>
              <Paragraph className={classes.text}>
                Now I study User Experience Research and Design at University of
                Michigan School of Information. I’m passionate about
                accessibility in technology and the ways in which technology can
                support underserved communities as well as widen the gap of
                inequity.
              </Paragraph>
              <Paragraph className={classes.text}>
                In my free time, you can find me at CrossFit, reading a good
                book, or trying to learn how to knit for the third time.
              </Paragraph>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Accordion sx={{ bgcolor: "#F4F2F3" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <h2>My Education</h2>
              </AccordionSummary>
              <AccordionDetails>
                <h3>University of Michigan School of Information</h3>
                <Typography>
                  <b>Master of Science</b> in Human-Computer Interaction and UX
                  Research and Design<br></br>
                  <em>In Progress</em>
                </Typography>
                <br></br>
                <Typography>
                  DePauw University <br></br>
                  <b>Bachelor of Arts</b> in Computer Science
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Col>
          <Col xs={4}>
            <Accordion sx={{ bgcolor: "#F4F2F3" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>Personal Achievements</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <li> I'm working on a Power Clean PR in CrossFit</li>
                  <li>
                    Right now, I'm reading <i>House on the Cerulean Sea</i> by
                    TJ Klune
                  </li>
                  <li>And I just taught myself how to knit!</li>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Col>
          <Col xs={4}>
            <Accordion sx={{ bgcolor: "#F4F2F3" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <h2>My Interests</h2>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Currently, I'm very interested in Augmented Reality, designing
                  for accessibility, and learning more about Dark Patterns.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Col>
        </Row>
      </Grid>
    </>
  );
};

export default About;
