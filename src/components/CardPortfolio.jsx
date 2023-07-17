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
    <div className='bg-color'>
        <Grid container spacing={2}>
            {
            projectInfo.map(( project ) => {
                return(
                    <Grid item xs={12} sm={12} md={6} lg={4} key={project.img}>
                        <Card sx={{ maxWidth: 500,
                                    backgroundColor: '#f8f8f8',
                                    color: '#000000',
                                    border: 1,
                                    borderColor:'#000000'
                                    }}  >
                        <CardHeader
                            title={project.title}
                            subheader="September 14, 2016"
                        />
                        <hr />
                        <CardMedia
                            component="img"
                            height="194"
                            image={project.img}
                            alt="Paella dish"
                            sx={{ padding: '0 1rem '}}
                        />
                        <hr />
                        <CardContent>
                            <Typography variant="body2" color='white'>
                            Tecnologias: {project.tecnology}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{
                            justifyContent: 'flex-end'
                        }}>
                            <Button size="small" href={project.path} sx={{ paddingRight: '1.9rem' }} color='secondary' target='_blank'>Ir al Sitio Web</Button>
                        </CardActions>
                        
                        <CardContent>
                                                               
                                {
                                    ( project.githubBack === null ) ? 
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                        >
                                        <Typography paragraph paddingTop={2}>Repositorio:</Typography>
                                        
                                        <Button  href={project.github} target='_blank' size="small" color='secondary' variant='contained'>Frontend</Button> 
                                    </Stack>
                                    :
                                    <Stack
                                        direction="row"
                                        divider={<Divider orientation="vertical" flexItem />}
                                        spacing={2}
                                        >
                                          <hr />
                                        <Typography paragraph paddingTop={2}>Repositorios:</Typography>

                                        <Button  href={ project.github } target='_blank' size="small" color='secondary' variant='contained' >Frontend</Button>
                                        <Button  href={ project.githubBack } target='_blank' size="small" color='secondary' variant='contained'>Backend</Button>   
                                    </Stack>
                                }
                        </CardContent>
                           
                        </Card>
                    </Grid>
                )
            })
            }
            </Grid>
    </div>
    
  );
}