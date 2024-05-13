import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
    ...(mode === "dark"
        ? {
              blueGrey: {
                  50: "#eceff1",
                  100: "#cfd8dc",
                  200: "#b0bec5",
                  300: "#90a4ae",
                  400: "#78909c",
                  500: "#607d8b",
                  600: "#546e7a",
                  700: "#455a64",
                  800: "#37474f",
                  900: "#263238",
              },
              grey: {
                  50: "#fafafa",
                  100: "#f5f5f5",
                  200: "#eeeeee",
                  300: "#e0e0e0",
                  400: "#bdbdbd",
                  500: "#9e9e9e",
                  600: "#757575",
                  700: "#616161",
                  800: "#424242",
                  900: "#212121",
              },
              primary: {
                  100: "#d0d1d5",
                  200: "#a1a4ab",
                  300: "#727681",
                  400: "#1F2A40",
                  500: "#141b2d",
                  600: "#101624",
                  700: "#0c101b",
                  800: "#080b12",
                  900: "#040509",
              },
              greenAccent: {
                  50: "#e8f5e9",
                  100: "#c8e6c9",
                  200: "#a5d6a7",
                  300: "#81c784",
                  400: "#66bb6a",
                  500: "#4caf50",
                  600: "#43a047",
                  700: "#388e3c",
                  800: "#2e7d32",
                  900: "#1b5e20",
              },
              redAccent: {
                  50: "#ffebee",
                  100: "#ffcdd2",
                  200: "#ef9a9a",
                  300: "#e57373",
                  400: "#ef5350",
                  500: "#f44336",
                  600: "#e53935",
                  700: "#d32f2f",
                  800: "#c62828",
                  900: "#b71c1c",
              },
              blueAccent: {
                  50: "#e3f2fd",
                  100: "#bbdefb",
                  200: "#90caf9",
                  300: "#64b5f6",
                  400: "#42a5f5",
                  500: "#2196f3",
                  600: "#1e88e5",
                  700: "#1976d2",
                  800: "#1565c0",
                  900: "#0d47a1",
              },
          }
        : {
              blueGrey: {
                  900: "#eceff1",
                  800: "#cfd8dc",
                  700: "#b0bec5",
                  600: "#90a4ae",
                  500: "#78909c",
                  400: "#607d8b",
                  300: "#546e7a",
                  200: "#455a64",
                  100: "#37474f",
                  50: "#263238",
              },
              grey: {
                  100: "#141414",
                  200: "#292929",
                  300: "#3d3d3d",
                  400: "#525252",
                  500: "#666666",
                  600: "#858585",
                  700: "#a3a3a3",
                  800: "#c2c2c2",
                  900: "#FFFFFF",
              },
              primary: {
                  100: "#040509",
                  200: "#080b12",
                  300: "#0c101b",
                  400: "#ffff", // manually changed
                  500: "#141b2d",
                  600: "#1F2A40",
                  700: "#727681",
                  800: "#a1a4ab",
                  900: "#d0d1d5",
              },
              greenAccent: {
                  50: "#1b5e20",
                  100: "#2e7d32",
                  200: "#388e3c",
                  300: "#43a047",
                  400: "#4caf50",
                  500: "#66bb6a",
                  600: "#81c784",
                  700: "#a5d6a7",
                  800: "#c8e6c9",
                  900: "#e8f5e9",
              },
              redAccent: {
                  50: "#b71c1c",
                  100: "#c62828",
                  200: "#d32f2f",
                  300: "#e53935",
                  400: "#f44336",
                  500: "#ef5350",
                  600: "#e57373",
                  700: "#ef9a9a",
                  800: "#ffcdd2",
                  900: "#ffebee",
              },
              blueAccent: {
                  50: "#0d47a1",
                  100: "#1565c0",
                  200: "#1976d2",
                  300: "#1e88e5",
                  400: "#2196f3",
                  500: "#42a5f5",
                  600: "#64b5f6",
                  700: "#90caf9",
                  800: "#bbdefb",
                  900: "#e3f2fd",
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
                     
                  }
                : {
                      // palette values for light mode
                    
                  }),
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
    };
};

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState("dark");

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        []
    );

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
};
