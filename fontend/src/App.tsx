import "@mantine/core/styles.css";
import { MantineProvider, Badge } from "@mantine/core";
import { theme } from "./theme";
import { Welcome } from "./Welcome/Welcome";
import { ColorSchemeToggle } from "./ColorSchemeToggle/ColorSchemeToggle";
import { useColorScheme } from '@mantine/hooks';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Welcome />
      <ColorSchemeToggle />
    </MantineProvider>
  );
}

export function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}