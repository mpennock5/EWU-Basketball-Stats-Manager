import { Button } from '@mui/material';
import { Link, Outlet } from '@remix-run/react';
import { useState } from 'react';
import HomeBanner from '~/components/HomeBanner';

const buttons = [
  {
    name: 'Opponent Scouts',
    to: 'opponent-scouts',
  },
  {
    name: 'Self Scouts',
    to: 'self-scouts',
  },
  {
    name: 'Offline Scouts',
    to: 'offline-scouts',
  },
  {
    name: 'Templates',
    to: 'templates',
  },
  {
    name: 'Archived',
    to: 'archived',
  },
];

const Scouts = () => {
  const [selected, setSelected] = useState(buttons[0].name);

  const buttonList = buttons.map((button) => (
    <Link style={{ textDecoration: 'none' }} to={button.to} key={button.name}>
      <Button
        sx={{ padding: '0px 6px' }}
        onClick={() => setSelected(button.name)}
        color="info"
        key={button.name}
        variant={selected === button.name ? 'contained' : void 0}
      >
        {button.name}
      </Button>
    </Link>
  ));

  return (
    <>
      <HomeBanner>{buttonList}</HomeBanner>
      <Outlet />
    </>
  );
};

export default Scouts;
