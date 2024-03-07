import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <div className="relative flex justify-center">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
