import { AppBar, Button, Toolbar } from '@mui/material';

const buttons = [
  {
    name: 'My Team',
    path: '',
  },
  {
    name: 'Opponents',
    path: '',
  },
  {
    name: 'Scouts',
    path: '',
  },
  {
    name: 'Plays',
    path: '',
  },
  {
    name: 'Videos',
    path: '',
  },
];

const buttonList = buttons.map((button) => (
  <Button color="info" key={button.name}>
    {button.name}
  </Button>
));

const HomeNavBar = () => {
  return (
    <AppBar position="relative" color="secondary">
      <Toolbar sx={{ gap: '1em' }}>{buttonList}</Toolbar>
    </AppBar>
  );
};
export default HomeNavBar;
