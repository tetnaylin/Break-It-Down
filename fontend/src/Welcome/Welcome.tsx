import { Title, Text } from "@mantine/core";
import * as classes from "./Welcome.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: "blue", to: "green" }}
        >
          Break It Down
        </Text>
      </Title>
      <Text color="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This AI powered project uses computer vision for you to boogie and lose weight at the same time.{" "}
        {/* {" "}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor> */}
        
      </Text>
    </>
  );
}
