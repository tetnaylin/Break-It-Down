import { Title, Text, Button, Container } from '@mantine/core';
import { Link} from 'react-router-dom';
import classes from './GameOver.module.css';

export function GameOver() {
  return (
    <Container className={classes.wrapper} size={1400}>
      
      <div className={classes.wave}></div>
      <Title className={classes.title}>
        <Text
          // inherit
          // variant="gradient"
          // component="span"
          // gradient={{ from: "white", to: "yellow" }}
          className={classes.neon}
          >
          GAME OVER
          </Text>{' '}
        </Title>

        <Container p={0} size={525}>
          <Text className={classes.description}>
          Congratulations! You have completed the game!
          </Text>
        </Container>

        <div className={classes.controls}>
        <Link to ="/selection">
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Play Again
          </Button>
        </Link>
        </div>
     
    </Container>
  );
}