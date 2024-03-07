import { Link, useLoaderData } from 'react-router-dom';
import { propType } from '../data';
import '/src/App.css';

const Home = () => {
  const data = useLoaderData() as propType[];

  return (
    <div className="mt-24 w-[90%] text-white flex flex-col items-center md:flex-wrap gap-4 md:flex-row md:grid md:grid-cols-2 xl:grid-cols-4">
      {data.map((el: propType, key: number) => (
        <Link
          key={key}
          state={el}
          to={`${el.artist.name}`}
          className="w-full cursor-pointer relative top-0   max-w-[324px]"
        >
          <img src={`${el.images.thumbnail}`} alt="" className="h-auto w-full " />
          <p className="absolute bottom-12 left-8 text-2xl font-bold w-[80%]">
            {el.name}
          </p>
          <p className="absolute left-8 bottom-6 text-xs opacity-75 font-normal">
            {el.artist.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default Home;
