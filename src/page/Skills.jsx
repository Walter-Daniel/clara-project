import { Button, Divider, Stack, Box , CardActions, CardMedia, CardContent, Card, CardHeader, Typography, Grid} from '@mui/material';

export const Skills = () => {
  return (
    <>
     <div id='skills'>
      <Typography variant='h2' textAlign='center' padding={5} color="secondary">HABILIDADES</Typography>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={4} key="skjdks">
        <Card sx={{ maxWidth: 500,
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      border: 1,
                      borderColor:'#ffffff'
                      }}  >
          <CardHeader
              title="Frontend"
          /> 
          <CardContent>          
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Redux Toolkit</li>
                <li>Ant Design</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>      
          </CardContent>  
          </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} key="sdks">
        <Card sx={{ maxWidth: 500,
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      border: 1,
                      borderColor:'#ffffff'
                      }}  >
          <CardHeader
              title="Backend"
          /> 
          <CardContent>          
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Mongoose</li>
                <li>JASON Web Token</li>
                <li>Bcrypt</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>SQLite</li>
              </ul>      
          </CardContent>  
          </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} key="skjds">
        <Card sx={{ maxWidth: 500,
                      backgroundColor: '#000000',
                      color: '#ffffff',
                      border: 1,
                      borderColor:'#ffffff'
                      }}  >
          <CardHeader
              title="Herramientas"
          /> 
          <CardContent>          
              <ul>
                <li>Git</li>
                <li>Github</li>
                <li>Trello</li>
                <li>Visual Studio Code</li>
                <li>MongoDBCompass</li>
                <li>Figma</li>
                <li>Canva</li>
                <li>Postman</li>
              </ul>      
          </CardContent>  
          </Card>
      </Grid>
      </Grid>
     </div>
    </>
  )
}
