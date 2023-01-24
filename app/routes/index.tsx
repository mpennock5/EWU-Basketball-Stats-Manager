import { AppBar } from '@mui/material';
import { Link } from '@remix-run/react';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <AppBar sx={{ backgroundColor: '#A10022' }}>
        <Link to={'/index'}>
          {/* Temporary: need to be replaced with local image */}
          <img
            style={{ width: '50px' }}
            src="https://cdn.ewu.edu/wp-content/themes/ewu-2018/assets/ewuEagle.png"
            alt="logo"
          ></img>
        </Link>
      </AppBar>
    </div>
  );
}
