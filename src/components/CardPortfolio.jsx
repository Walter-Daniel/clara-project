import * as React from "react";
import {
  Button,
  Stack,
  CardActions,
  CardMedia,
  CardContent,
  Card,
  CardHeader,
  Typography,
  Grid,
} from "@mui/material";
import { projectInfo } from "../helpers/projectsInfo";
import pinkTack from "../assets/img/tack/white.png";
import buttonSticker from "../assets/img/tack/title-sticker.png";

export const CardPortfolio = () => {
  return (
    <div className="bg-color">
      <Grid container spacing={2}>
        {projectInfo.map((project) => {
          return (
            <Grid item xs={12} sm={12} md={6} lg={4} key={project.img}>  
                <Card
                  className="lines"
                  sx={{
                    maxWidth: 503,
                    minHeight: 515,
                    backgroundColor: "#f8f8f8",
                    color: "#000000",
                    border: 1,
                    padding: "0 5px",
                    borderColor: "#000000",
                    position: "relative",
                    overflow: "inherit",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={pinkTack}
                    className="tack-card"
                    sx={{ width: "150px" }}
                  />
                  <CardHeader
                    title={project.title}
                    id="historieta"
                    titleTypographyProps={{ variant: "h6" }}
                    sx={{ margin: "1rem 0" }}
                  />
                  <CardMedia
                    component="img"
                    height="204"
                    className="cardImage"
                    image={project.img}
                    alt={project.img}
                  />
                  <CardContent>
                    <Typography variant="body2" color="black">
                      Tecnologias: {project.tecnology}
                    </Typography>
                  </CardContent>

                  <CardActions
                    sx={{
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      size="small"
                      href={project.path}
                      sx={{ paddingRight: "1.9rem" }}
                      target="_blank"
                      className="button-sticker"
                    >
                      <img src={buttonSticker} alt="" />
                      <p>Ir al Sitio Web</p>
                    </Button>
                  </CardActions>

                  <CardContent>
                    {project.githubBack === null ? (
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Typography paragraph paddingTop={0.5}>
                          Repositorio:
                        </Typography>
                        <Button
                          href={project.github}
                          target="_blank"
                          size="small"
                          color="secondary"
                          sx={{ maxHeight: "2.5rem", minHeight: "2.5rem" }}
                          variant="contained"
                          className="btn-1"
                        >
                          Frontend
                        </Button>
                      </Stack>
                    ) : (
                      <Stack direction="row" spacing={2}>
                        <Typography paragraph paddingTop={1}>
                          Repositorios:
                        </Typography>

                        <Button
                          href={project.github}
                          target="_blank"
                          size="small"
                          color="secondary"
                          variant="contained"
                          sx={{ minHeight: "2.5rem", maxHeight: "2.5rem" }}
                          className="btn-1"
                        >
                          Frontend
                        </Button>
                        <Button
                          href={project.githubBack}
                          target="_blank"
                          size="small"
                          color="secondary"
                          variant="contained"
                          sx={{ minHeight: "2.5rem", maxHeight: "2.5rem" }}
                          className="btn-1"
                        >
                          Backend
                        </Button>
                      </Stack>
                    )}
                  </CardContent>
                </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
