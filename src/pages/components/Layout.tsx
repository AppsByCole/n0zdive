import Image from 'next/image';

type Props = {
  children: JSX.Element;
};

export default function Layout({children}: Props) {
  return (
    <>
      <h1 className="bg-zinc-600 text-5xl font-extrabold tracking-tight text-gray-400 sm:text-[5rem] select-none">
        N0zdive <span className="text-red-600">.</span> com
      </h1>
      {children}
      <div className="bg-zinc-600 h-20 flex">
        <span className="flex flex-col h-full items-start justify-center pl-6 select-none w-full">
          <a>
            Info and things
          </a>
        </span>
        <Image alt="Apps By Cole Logo" height="64" src='/ABClogo.png' width="64" />
        <span className="flex flex-col h-full items-end justify-center pr-6 select-none w-full">
          <a>
            Contact and links
          </a>
        </span>
      </div>
    </>
  );
}