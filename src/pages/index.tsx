import { type NextPage } from "next";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className="page">
      <div className="flex">
        <Link 
          className="button"
          href='/drone-troubleshooter'
          >
          Drone troubleshooter
        </Link>
        <Link 
          className="button"
          href='/frustration'
          >
          Frustration Machine
        </Link>
      </div>
    </div>
  );
};

export default Home;