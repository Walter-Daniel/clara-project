import { Box, CardContent, Card, CardHeader, Typography, Grid} from '@mui/material';
import pinkTack from '../assets/img/tack/pink.png'

export const Skills = () => {
  return (
    <>
     <Box id='skills' sx={{ border:'1px solid black', padding:'7px', mt:1}}>
      <Typography variant='h2' textAlign='center' padding={2}>HABILIDADES</Typography>
      <hr />
      <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} lg={4} key="skjdks">
        <Box position='relative'>
          <img src={pinkTack} alt="pink tack" className='tack-skills' />      
            <Card sx={{ maxWidth: 500,
                            color: '#000',
                            border: 1,
                            borderColor:'#000',
                            margin: '2rem'
                          }}  >
                        
              <CardHeader
                  title="Frontend"
                  style={{ borderBottom: '1px solid black', textAlign:'center' }}
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
          </Box> 
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4} key="sdks">
        <Card sx={{ maxWidth: 500,
                      
                      color: '#000',
                      border: 1,
                      borderColor:'#000',

                      }}  >
          <CardHeader
              title="Backend"
              style={{ borderBottom: '1px solid black' }}      
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
                        color: '#000',
                        border: 1,
                        borderColor:'#000',
                      }}  >
          <CardHeader
              title="Herramientas"
              style={{ borderBottom: '1px solid black' }}
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
     </Box>
    </>
  )
}
