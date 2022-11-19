import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-400 sm:text-[5rem] select-none">
        N0zdive <span className="text-red-600">.</span> com
      </h1>
    </div>
  );
};

export default Home;