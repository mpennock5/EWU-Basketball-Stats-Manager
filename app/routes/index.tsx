import { ThemeProvider } from "@mui/material";
import Nav from "~/components/Nav";
import theme from "~/palette/pallette";

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Nav />
    </ThemeProvider>
  );
}
