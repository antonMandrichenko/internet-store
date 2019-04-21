import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  "palette": {
    "common": {
      "black": "rgba(212, 53, 53, 1)",
      "white": "#fff"
    },
    "background": {
      "paper": "rgba(255, 255, 255, 1)",
      "default": "rgba(255, 255, 255, 1)"
    },
    "primary": {
      "light": "#79CBA0",
      "main": "rgba(73, 164, 61, 1)",
      "dark": "#51742E",
      "contrastText": "#fff"
    },
    "secondary": {
      "light": "#57CC8F",
      "main": "#396960",
      "dark": "#366438",
      "contrastText": "#fff"
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#57CC8F",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(63, 57, 57, 0.87)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    }
  }
});
