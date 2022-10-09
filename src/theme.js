import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    maroon: {
      100: "#e3606b",
      300: "#b4404e",
      600: "#8f2a36",
      900: "#591e22",
    },
    brown: {
      100: "#df916f",
      300: "#a3513c",
      600: "#85392d",
      900: "#65241b",
    },
    orange: {
      100: "#de834d",
      300: "#c76d39",
      600: "#a75627",
      900: "#844019",
    },
    beige: {
      100: "#f0d290",
      300: "#c7aa6c",
      600: "#9b7846",
      900: "#735e31",
    },
  },
});

export default theme