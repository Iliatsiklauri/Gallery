import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="w-full bt absolute top-0 flex items-center justify-center flex-col">
      <div className="h-[85px] flex items-center justify-between w-[90%]">
        <Link to="/">
          <img
            src="assets\shared\logo.svg"
            alt=""
            className="w-[115px] h-8 xl:w-[169px] xl:h-auto"
          />
        </Link>
        <p className="text-[10px] xl:text-[12px] tracking-widest text-[#7D7D7D] font-bold h-[11px] xl:tracking-wider cursor-pointer">
          START SLIDESHOW
        </p>
      </div>
      <div className="w-full h-[1px] bg-[#E5E5E5]"></div>
    </div>
  );
};

export default Header;
