import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

const HomeHeader = () => {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex items-center space-x-4">
        <Link href="https://mail.google.com" className="hover:underline">
          Gmail
        </Link>
        <Link href="https://image.google.com" className="hover:underline">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-200 rounded-full text-4xl p-2" />
        <button className="bg-blue-400 px-5 py-2 rounded-md text-white font-medium hover:brightness-105 hover:shadow-md transition-shadow">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default HomeHeader;
