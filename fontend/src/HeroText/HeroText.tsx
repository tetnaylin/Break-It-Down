import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import { Link} from 'react-router-dom';
import classes from './HeroText.module.css';

export function HeroText() {
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 40, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Let Me{' '}
          <Text
            inherit
            variant="gradient"
            component="span"
            gradient={{ from: "blue", to: "green" }}
            >
            Break It Down
            </Text>{' '}
          For You
        </Title>

        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
          This AI powered project uses computer vision for you to boogie and lose weight at the same time.
          </Text>
        </Container>

        <div className={classes.controls}>
        <Link to ="/selection">
          <Button className={classes.control} size="lg" variant="default" color="gray">
            Play
          </Button>
        </Link>
        </div>
      </div>
      <Dots className={classes.dots} style={{ left: 0, top: 500 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 400 }} />
      <Dots className={classes.dots} style={{ left: 1000, top: 400 }} />
      <Dots className={classes.dots} style={{ right: 10, top: 500 }} />
    </Container>
  );
}