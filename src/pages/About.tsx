import { useLocation } from 'react-router-dom';

const About = () => {
  const { state } = useLocation();

  return (
    <div className="mt-24 flex items-center md:items-start justify-center flex-col gap-28 md:gap-16 xl:flex-row relative w-[90%]">
      <div className="relative ">
        <img
          src={`${state.images.hero.small}`}
          alt=""
          className="w-[90%] h-auto md:hidden"
        />
        <img
          src={`${state.images.hero.large}`}
          alt=""
          className="w-[575px] h-auto hidden md:block"
        />
        <div className="absolute bottom-[-120px] md:top-0 md:right-[-130px] xl:right-[-180px]">
          <div className="w-[280px] h-26 bg-white p-4 md:p-4 flex flex-col md:gap-4">
            <p className="text-2xl font-bold md:text-4xl">{state.name}</p>
            <p className="text-[#7D7D7D] text-base">{state.artist.name}</p>
          </div>
          <img
            src={`${state.artist.image}`}
            alt=""
            className="w-16 h-16 md:h-24 md:w-24 md:float-right xl:mt-60"
          />
        </div>
      </div>
      <div className=" mf:flex md:flex-col md:w-[90%] relative">
        <p className="text-8xl font-bold text-[#F3F3F3] w-[90%] text-right md:text-left md:text-[200px] z-10 xl:text-right">
          {state.year}
        </p>
        <div className="md:absolute md:top-20 md:right-0 flex flex-col md:w-[70%] md:gap-20 xl:mr-32 xl:w-[50%]">
          <p className="font-bold text-[#7D7D7D] text-sm leading-[28px] text-left md:text-left md:float-right xl:float-left xl:text-left xl:mt-16  z-20 ">
            {state.description}
          </p>
          <a
            href={`${state.source}`}
            className="text-xs text-[#7D7D7D] tracking-wider mt-[16] self-start hidden md:block hover:text-black hover:underline"
          >
            GO TO SOURCE
          </a>
        </div>
      </div>
      <a
        href={`${state.source}`}
        className="mb-44 mt-[-80px] text-xs text-[#7D7D7D] tracking-wider  self-start md:hidden"
      >
        GO TO SOURCE
      </a>

      <div className="flex items-center justify-between w-full h-20 absolute bottom-0 border-t-[1px] border-[#E5E5E5] md:bottom-[-380px] xl:bottom-[-22 0px]">
        <div className="flex flex-col">
          <p className="text-sm font-bold md:text-xl">{state.name}</p>
          <p className="text-[10px] opacity-75 md:text-sm">{state.artist.name}</p>
        </div>
        <div className="flex items-center justify-between gap-6">
          <img
            src="assets\shared\icon-back-button.svg"
            alt=""
            className="cursor-pointer"
          />
          <img
            src="assets\shared\icon-next-button.svg"
            alt=""
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
