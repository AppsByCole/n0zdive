type Props = {
  children: JSX.Element;
};

export default function Layout({children}: Props) {
  return (
    <>
      <h1 className="text-5xl font-extrabold tracking-tight text-gray-400 sm:text-[5rem] select-none">
        N0zdive <span className="text-red-600">.</span> com
      </h1>
      {children}
    </>
  );
};
