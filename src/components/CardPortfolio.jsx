import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Divider, Stack, IconButton, Collapse, CardActions, CardMedia, CardContent, Card, CardHeader, Typography, styled, Grid, Box} from '@mui/material';
import { projectInfo } from '../helpers/projectsInfo';
import pinkTack from "../assets/img/tack/pink.png";


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
                      <Box position='relative'>
                      <img src={pinkTack} alt="pink tack" className="tack-left-skill" />

                      <Card className='lines'
                        sx={{ maxWidth: 500,
                              minHeight: 500,
                                    backgroundColor: '#f8f8f8',
                                    color: '#000000',
                                    border: 1,
                                    borderColor:'#000000',
                                    }}  
                                    >
                        <CardHeader
                            title={project.title}
                            subheader="September 14, 2016"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={project.img}
                            alt="Paella dish"
                            sx={{ padding: '0 1rem '}}
                        />
                        <CardContent>
                            <Typography variant="body2" color='black'>
                            Tecnologias: {project.tecnology}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{
                            justifyContent: 'flex-end',
                        }}>
                            <Button size="small" href={project.path} sx={{ paddingRight: '1.9rem', paddingTop:'0.8rem' }} color='secondary' target='_blank'>Ir al Sitio Web</Button>
                        </CardActions>
                        
                        <CardContent>
                                                               
                                {
                                    ( project.githubBack === null ) ? 
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        alignItems='center'
                                        >
                                        <Typography paragraph paddingTop={0.5}>Repositorio:</Typography>
                                        <Button  href={project.github} target='_blank' size="small" color='secondary' sx={{ maxHeight:'2.5rem', minHeight:'2.5rem' }}variant='contained' className='btn-1'>Frontend</Button> 
                                    </Stack>
                                    :
                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        >
                                        <Typography paragraph paddingTop={1}>Repositorios:</Typography>

                                        <Button  href={ project.github } target='_blank' size="small" color='secondary' variant='contained' sx={{ minHeight:'2.5rem' }} className='btn-1'>Frontend</Button>
                                        <Button  href={ project.githubBack } target='_blank' size="small" color='secondary' variant='contained' sx={{ minHeight:'2.5rem' }} className='btn-1'>Backend</Button>   
                                    </Stack>
                                }
                        </CardContent>
                           
                        </Card>
                      </Box>
                        
                    </Grid>
                )
            })
            }
            </Grid>
    </div>
    
  );
}