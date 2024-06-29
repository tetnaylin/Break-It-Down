import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
//import { Welcome } from "./Welcome/Welcome";
import { HeroText } from "./HeroText/HeroText";

export default function App() {
  return (
      <MantineProvider theme={theme}>
        
        <HeroText />
        
      </MantineProvider>
  );
}
