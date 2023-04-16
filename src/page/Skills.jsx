import { Button, Divider, Stack, Box , CardActions, CardMedia, CardContent, Card, CardHeader, Typography} from '@mui/material';

export const Skills = () => {
  return (
    <>
     <div>
      <h2>Habilidades</h2>
      <Box>
      <Card sx={{ maxWidth: 500,
                    backgroundColor: '#000000',
                    color: '#ffffff',
                    border: 1,
                    borderColor:'#ffffff'
                    }}  >
        <CardHeader
            // title={project.title}
            subheader="September 14, 2016"
        />
        
        <CardContent>
          
            {/* Tecnologias: {project.tecnology} */}
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
     </div>
    </>
  )
}
