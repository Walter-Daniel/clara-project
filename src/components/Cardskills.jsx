import { Card, CardContent, CardHeader } from '@mui/material'

export const Cardskills = (skills, title) => {
  return (
    <Card sx={{ maxWidth: 500,
                color: '#000',
                border: 1,
                borderColor:'#000',
                margin: '2rem'}}>                
              <CardHeader
                  title={title}
                  style={{ borderBottom: '1px solid black', textAlign:'center' }}
              /> 
              <CardContent>          
                  <ul>
                    {
                        skills.map((skill) => (
                            <li>{skill}</li>
                        ))
                    }
                  </ul>      
              </CardContent>  
        </Card>
  )
}
