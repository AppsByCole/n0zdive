type Props = {
  children: JSX.Element;
};

export default function Layout({children}: Props) {
  return (
    <div className="h-full">

      <h1 className="text-4xl text-center">Header</h1>
      
      {children}
      
      <h1 className="text-4xl text-center">Footer</h1>

    </div>
  );
};