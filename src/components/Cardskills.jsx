import { Box, Card, CardContent, CardHeader, Grid } from "@mui/material";
import { skillsData } from "../helpers/skills";
import pinkTack from "../assets/img/tack/pink.png";

export const CardSkills = () => {
  return (
    <>
      {skillsData.map(({ skills, title }) => (
        <Grid item xs={12} sm={12} md={6} lg={4} key="skjdks">
          <Box position="relative">
            <img src={pinkTack} alt="pink tack" className="tack-left-skill" />
            <Card
              className="paper"
              sx={{
                maxWidth: 500,
                color: "#000",
                border: 1,
                borderColor: "#000",
                margin: "2rem",
              }}
            >
              <div className="lines">
                <CardHeader
                  title={title}
                  style={{ textAlign: "center", textTransform: "uppercase" }}
                />
                <CardContent>
                  <ul className="skill-li">
                    {skills.map((skill, index) => (
                      <li>{skill}</li>
                    ))}
                  </ul>
                </CardContent>
                <div class="holes hole-top"></div>
                <div class="holes hole-middle"></div>
                <div class="holes hole-bottom"></div>
              </div>
            </Card>
          </Box>
        </Grid>
      ))}
    </>
  );
};
