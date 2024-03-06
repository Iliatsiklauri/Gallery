import { useLoaderData } from 'react-router-dom';
import { propType } from '../data';
const Home = () => {
  const data = useLoaderData() as propType[];
  return (
    <div className="flex  flex-wrap items-center justify-center gap-6 mt-24 w-[90%] text-white">
      {data.map((el: propType, key: number) => (
        <div key={key} className="w-full cursor-pointer relative top-0 bg-gray-300">
          <img src={`${el.images.thumbnail}`} alt="" className="h-auto w-full" />
          <p className="absolute bottom-12 left-8 text-2xl font-bold w-[80%]">
            {el.name}
          </p>
          <p className="absolute left-8 bottom-6 text-xs opacity-75 font-normal">
            {el.artist.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Home;
