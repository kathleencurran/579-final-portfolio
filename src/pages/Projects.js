import ProjectCard from "../components/ProjectCard";
import { Grid, Row, Col } from "react-flexbox-grid";
import projects from "../project_info.json";
import { makeStyles } from "@mui/styles";
import { Box, Button } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    marginBottom: "3rem",
  },
  projectbox: {
    width: "350px",
  },
  col: {
    marginBottom: "3rem",
    flexBasis: "50%",
  },
  row: {
    marginTop: "1rem",
  },
  grid: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
}));

const Projects = () => {
  const projectlist = projects.projects;
  const classes = useStyles();

  console.log(projectlist);
  return (
    <>
      <Box className={classes.header}>
        <h1>Past Projects</h1>
      </Box>

      <Grid className={classes.grid} fluid>
        <Row>
          {projectlist.map((proj, index) => (
            <Col className={classes.col} key={index}>
              <ProjectCard
                classname={classes.projectbox}
                projectName={proj.name}
                projectRole={proj.role}
                projectImage={proj.image_url}
                projectLink={proj.link}
                projectDescription={proj.description}
              ></ProjectCard>
            </Col>
          ))}
        </Row>
      </Grid>
    </>
  );
};

export default Projects;
