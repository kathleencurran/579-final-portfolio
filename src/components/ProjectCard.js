import { CardActionArea, CardContent } from "@mui/material";
import { Card, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    width: "475px",
    margin: "auto",
  },
  image: { height: "250px", objectFit: "contain!important" },
  text: {
    margin: "2rem 0",
  },
}));

const ProjectCard = (props) => {
  const classes = useStyle();
  const {
    projectName,
    projectRole,
    projectImage,
    projectLink,
    projectAlt,
    projectDescription,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={projectLink}>
        <CardMedia
          className={classes.image}
          component="img"
          image={projectImage}
          alt={projectAlt}
        ></CardMedia>
        <CardContent>
          <Typography className={classes.text} variant="h4">
            {projectName}
          </Typography>
          <Typography className={classes.text}>
            <b>Role</b>: {projectRole}
          </Typography>

          <Typography className={classes.text}>{projectDescription}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
