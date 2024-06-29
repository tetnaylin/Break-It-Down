import { createTheme } from "@mantine/core";
import { themeToVars } from "@mantine/vanilla-extract";

export const theme = createTheme({
    defaultGradient: {
      from: 'orange',
      to: 'red',
      deg: 45,
    },
});

//export const theme = createTheme({});
export const vars = themeToVars(theme);

