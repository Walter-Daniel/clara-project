import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from "@mui/lab"
import { Box, Chip, Typography } from "@mui/material"
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';


export const Education = () => {
  return (
    <Box id="education" sx={{ border:'1px solid black', mt:1 }}> 
        <Box sx={{ borderBottom: '1px solid black' }}>     
            <Typography variant='h2' textAlign='center' padding={5} color="secondary">EDUCACIÓN</Typography>
        </Box>
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="white"
                    >
                        <Chip label="03/2022 - Presente" variant="outlined" />
                    
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary" variant="outlined">
                <MenuBookTwoToneIcon />
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Instituto Rush
                </Typography>
                <Typography>Intensivo 2 (nivel correspondiente: A2)</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    > 
                    <Chip label="03/2022 - Presente" variant="outlined" />
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/></svg>
                </TimelineDot>
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    Programador Universitaro
                </Typography>
                <Typography>Facultad de Ciencias Exactas y Tecnología - UNT</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="white"
                    >
                 <Chip label="10/2021 - 05/2022" variant="outlined" />       
                    
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="secondary" variant="outlined">
                   <LaptopMacIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                    FullStack Web Developer (MERN)
                </Typography>
                <Typography>RollingCode School</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>  
    </Box>
  )
}
