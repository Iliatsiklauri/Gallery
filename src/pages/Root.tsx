import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Root = () => {
  return (
    <div className="relative flex items-center justify-center flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default Root;
