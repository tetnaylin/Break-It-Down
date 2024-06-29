import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import { Link} from 'react-router-dom';
import classes from './HeroText.module.css';
//import glitch from './glitch.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 40, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.wave}></div>
      <Title className={classes.title}>
          Let Me{' '}
          <Text
            // inherit
            // variant="gradient"
            // component="span"
            // gradient={{ from: "white", to: "yellow" }}
            className={classes.neon}
            >
            Break It Down
            </Text>{' '}
          For You
        </Title>

        <Container p={0} size={525}>
          <Text className={classes.description}>
          This is an AI powered project which uses computer vision for you to boogie and lose weight at the same time.
          </Text>
        </Container>

        <div className={classes.controls}>
        <Link to ="/selection">
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Play
          </Button>
        </Link>
        </div>
      <Dots className={classes.dots} style={{ left: 0, top: 500 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 400 }} />
      <Dots className={classes.dots} style={{ left: 1000, top: 400 }} />
      <Dots className={classes.dots} style={{ right: 10, top: 500 }} />
    </Container>
  );
}