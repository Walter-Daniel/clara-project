import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Divider, Stack, IconButton, Collapse, CardActions, CardMedia, CardContent, Card, CardHeader, Typography, styled, Grid} from '@mui/material';
import { projectInfo } from '../helpers/projectsInfo';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardPortfolio = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
        <Typography variant='h2' textAlign='center'>Portfolio</Typography>

        <Grid container spacing={2}>


            {
            projectInfo.map(( project ) => {
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4}>
                        <Card sx={{ maxWidth: 500 }}>
                        <CardHeader
                            title={project.title}
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={project.img}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Tecnologias: {project.tecnology}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            
                        <p>Links importantes</p>
                            <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon />
                            </ExpandMore>
                            
                        </CardActions>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                                <Typography paragraph>Sitio Web:</Typography>
                                <Button variant="contained" href='www.google.com' target='_blank' >Deploy</Button>
                                <Typography paragraph>Repositorios:</Typography>
                                {
                                    ( project.githubBack === null ) ? 
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                        >
                                        <Button variant="contained" href={project.github} target='_blank' >Frontend</Button> 
                                    </Stack>
                                    :
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                        >
                                        <Button variant="contained" href={ project.github } target='_blank' >Frontend</Button>
                                        <Button variant="contained" href={ project.githubBack } target='_blank' >Backend</Button>   
                                    </Stack>
                                }
                            </CardContent>
                        </Collapse>
                        </Card>
                    </Grid>
                )
            })
            }
            </Grid>
    </div>
    
  );
}