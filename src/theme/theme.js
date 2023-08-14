import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// collor design tokens
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        background: {
          darkBlue: {
            100: "#ccccd3",
            200: "#9a99a7",
            300: "#67667c",
            400: "#353350",
            500: "#020024",
            600: "#02001d",
            700: "#010016",
            800: "#01000e",
            900: "#000007",
          },
          darkGreen: {
            100: "#cee4d9",
            200: "#9dc9b3",
            300: "#6baf8d",
            400: "#3a9467",
            500: "#097941",
            600: "#076134",
            700: "#054927",
            800: "#04301a",
            900: "#02180d",
          },
          greenAccent: {
            100: "#cdf0df",
            200: "#9be1be",
            300: "#69d39e",
            400: "#37c47d",
            500: "#05b55d",
            600: "#04914a",
            700: "#036d38",
            800: "#024825",
            900: "#012413",
          },
          lime: {
            100: "#ccffef",
            200: "#99ffdf",
            300: "#66ffcf",
            400: "#33ffbf",
            500: "#00ffaf",
            600: "#00cc8c",
            700: "#009969",
            800: "#006646",
            900: "#003323",
          },
        },
        switch: {
          circle: {
            100: "#ccffef",
            200: "#99ffdf",
            300: "#66ffcf",
            400: "#33ffbf",
            500: "#00ffaf",
            600: "#00cc8c",
            700: "#009969",
            800: "#006646",
            900: "#003323",
          },
          bgImage: {
            100: "#ccccd3",
            200: "#9a99a7",
            300: "#67667c",
            400: "#353350",
            500: "#020024",
            600: "#02001d",
            700: "#010016",
            800: "#01000e",
            900: "#000007",
          },
        },
        typography: {
          main: {
            100: "#f8fcfd",
            200: "#f1fafc",
            300: "#e9f7fa",
            400: "#e2f5f9",
            500: "#dbf2f7",
            600: "#afc2c6",
            700: "#839194",
            800: "#586163",
            900: "#2c3031",
          },
        },
      }
    : {
        background: {
          lightBlue: {
            100: "#f8fcfd",
            200: "#f1fafc",
            300: "#e9f7fa",
            400: "#e2f5f9",
            500: "#dbf2f7",
            600: "#afc2c6",
            700: "#839194",
            800: "#586163",
            900: "#2c3031",
          },
          lightGray: {
            100: "#fafaff",
            200: "#f6f5ff",
            300: "#f1f0ff",
            400: "#edebff",
            500: "#e8e6ff",
            600: "#bab8cc",
            700: "#8b8a99",
            800: "#5d5c66",
            900: "#2e2e33",
          },
          lightPurple: {
            100: "#fefaff",
            200: "#fdf5ff",
            300: "#fcefff",
            400: "#fbeaff",
            500: "#fae5ff",
            600: "#c8b7cc",
            700: "#968999",
            800: "#645c66",
            900: "#322e33",
          },
          lightPink: {
            100: "#fff9ff",
            200: "#fff3ff",
            300: "#feeeff",
            400: "#fee8ff",
            500: "#fee2ff",
            600: "#cbb5cc",
            700: "#988899",
            800: "#665a66",
            900: "#332d33",
          },
        },
        switch: {
          circle: {
            100: "#fff9ff",
            200: "#fff3ff",
            300: "#feeeff",
            400: "#fee8ff",
            500: "#fee2ff",
            600: "#cbb5cc",
            700: "#988899",
            800: "#665a66",
            900: "#332d33",
          },
          bgImage: {
            100: "#f8fcfd",
            200: "#f1fafc",
            300: "#e9f7fa",
            400: "#e2f5f9",
            500: "#dbf2f7",
            600: "#afc2c6",
            700: "#839194",
            800: "#586163",
            900: "#2c3031",
          },
        },
        typography: {
          main: {
            100: "#ccccd3",
            200: "#9a99a7",
            300: "#67667c",
            400: "#353350",
            500: "#020024",
            600: "#02001d",
            700: "#010016",
            800: "#01000e",
            900: "#000007",
          },
        },
      }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            background: {
              default: colors.background.darkBlue[500],
              gradient: `linear-gradient(90deg, ${colors.background.darkBlue[500]} 0%, ${colors.background.darkGreen[500]} 44%, ${colors.background.greenAccent[500]} 67%, ${colors.background.lime[500]} 100%);`,
            },
            switch: {
              circle: colors.background.lime[500],
              bgImage: colors.background.darkBlue[500],
            },
            typography: {
              main: colors.typography.main[500],
            },
          }
        : {
            background: {
              default: colors.background.lightBlue[500],
              gradient: `linear-gradient(90deg, ${colors.background.lightBlue[500]} 0%, ${colors.background.lightGray[500]} 44%, ${colors.background.lightPurple[500]} 67%, ${colors.background.lightPink[500]} 100%);`,
            },
            switch: {
              circle: colors.background.lightPink[500],
              bgImage: colors.background.lightBlue[500],
            },
            typography: {
              main: colors.typography.main[500],
            },
          }),
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

<<<<<<< Updated upstream
=======
  if (!storeMode) {
    window.localStorage.setItem("mode", mode);
  }

  if (storeMode !== mode && storeMode) {
    setMode(storeMode);
  }

>>>>>>> Stashed changes
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
