import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Typography } from '@mui/material';
import EwuLogo from './EwuLogo';

interface props {
  children: JSX.Element[];
}

const HomeBanner = (props: props) => {
  const children = props.children;
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '132px',
        backgroundImage: 'linear-gradient(to right, #b7142e, #5e0816',
      }}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', paddingLeft: '3em' }}
      >
        <Typography variant="h3" color="text.secondary">
          EASTERN WASHINGTON UNIVERSITY
        </Typography>
        <div style={{ display: 'flex', gap: '1em', paddingTop: '4px' }}>
          {children}
        </div>
      </div>
      <div style={{ paddingRight: '1em' }}>
        <EwuLogo />
      </div>
    </div>
  );
};
export default HomeBanner;
