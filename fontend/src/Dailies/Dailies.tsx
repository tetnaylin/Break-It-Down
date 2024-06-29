
import { Text, Progress, Card } from '@mantine/core';
import classes from './Dailies.module.css';

export function Stats() {
   return (
    <div className={classes.positioning}>
       <Card withBorder radius="xl" padding="xs" bg="var(--mantine-color-body)" className={classes.smallcard}>
        
         <Text fz="xl" tt="uppercase" fw={1000} c="dimmed">
           Daily objectives
         </Text>
           <br>
           </br>
         <Text fz="md" tt="uppercase" fw={700} c="dimmed">
           * Burning dance
         </Text>
         <Text fz="xs" fw={700} c="dimmed">
          
           Burn 5000 calories
          
         </Text>
         <br></br>
         <Text fz="md" fw={500}>
           0 / 100
         </Text>
         <Progress value={0} mt="md" size="lg" radius="s" />
         <br></br>
         <Text fz="md" tt="uppercase" fw={700} c="dimmed">
           * Winner's Mentality
         </Text>
         <Text fz="xs" fw={700} c="dimmed">
          
           Obtain 3 stars on a hard song
      
         </Text>
         <br></br>
         <Text fz="md" fw={500}>
           0 / 100
         </Text>
         <Progress value={0} mt="md" size="lg" radius="s" />
        
       </Card>
      </div>
     );
}
