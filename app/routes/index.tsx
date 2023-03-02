import HomeBanner from '~/components/HomeBanner';
import { ThemeProvider } from '@mui/material';
import HomeNavBar from '~/components/HomeNavBar';
import theme from '~/palette/pallette';

export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HomeNavBar />
        <HomeBanner />
      </div>
    </ThemeProvider>
  );
}
