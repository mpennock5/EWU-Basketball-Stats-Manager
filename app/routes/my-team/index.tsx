import { redirect } from '@remix-run/node';

const index = () => {
  return redirect('/analytics');
};

export default index;
