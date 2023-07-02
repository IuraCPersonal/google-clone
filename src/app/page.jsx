import { HomeHeader, HomeSearch } from "@/components";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HomeHeader />

      <div className="flex flex-col items-center mt-24">
        <Image
          alt="google-logo"
          width="300"
          height="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
        />

        <HomeSearch />
      </div>
    </>
  );
};

export default Home;
