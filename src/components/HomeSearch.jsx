import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  return (
    <form className="flex items-center w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl">
      <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
      <input type="text" className="flex-grow outline-none" />
      <BsFillMicFill className="text-lg" />
    </form>
  );
};

export default HomeSearch;