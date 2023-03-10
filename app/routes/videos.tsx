import { Outlet } from '@remix-run/react';
import HomeBanner from '~/components/HomeBanner';

const Videos = () => {
  return (
    <>
      <HomeBanner />
      <Outlet />
    </>
  );
};

export default Videos;
