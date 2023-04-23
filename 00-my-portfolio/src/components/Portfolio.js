import React from "react";
//  MUI library to import various components from Material UI
import { Grid, Card,CardMedia,Typography} from "@mui/material";
import "./Portfolio.css";


import { FaGithub, } from "react-icons/fa";

function Portfolio() {
  return (
    <>
      <h1 className="marginal text">Portfolio</h1>
      

      <Grid
        className="grid-card"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 1 }}
      >
        <Card className="card" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="640"
            image={require("../assets/blog.jpg")}
            alt="Tech-Blog image"
          />
          <div className="card-footer">
            <a
              href="https://github.com/Majid-pkz/Tech-Blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-size" />
            </a>
            <a
              href="https://tech-blog-surfer.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>TechBlog</Typography>
            </a>
          </div>
        </Card>

        <Card className="card" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="640"
            image={require("../assets/job.png")}
            alt="green iguana"
          />

          <div className="card-footer">
            <a
              href="https://github.com/Majid-pkz/TalentBridge-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-size" />
            </a>
            <a
              href="https://talent-bridge-app.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>TalentBridge</Typography>
            </a>
          </div>
        </Card>

        <Card className="card" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="640"
            image={require("../assets/weather.webp")}
            alt="green iguana"
          />
          <div className="card-footer">
            <a
              href="https://github.com/Majid-pkz/Simpal-Weather-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-size" />
            </a>
            <a
              href="https://majid-pkz.github.io/Simpal-Weather-Dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>Weather-Dashboard</Typography>
            </a>
          </div>
        </Card>

        <Card className="card" sx={{ maxWidth: 400 }}>
          <CardMedia
            component="img"
            height="640"
            image={require("../assets/note.jpg")}
            alt="green iguana"
          />
          <div className="card-footer">
            <a
              href="https://github.com/Majid-pkz/NoteCraft"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon-size" />
            </a>
            <a
              href="https://sleepy-oasis-80483.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography>NoteCraft</Typography>
            </a>
          </div>
        </Card>
      </Grid>
    </>
  );
}

export default Portfolio;
