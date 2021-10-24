import Image from "next/image";

import {
  SearchIcon,
  UserGroupIcon,
  PlusCircleIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 z-50 bg-white" >
    <div className="flex flex-row items-center justify-between max-w-6xl mx-5 py-2 lg:mx-auto">
      <div className="relative w-24 h-14 hidden sm:inline-block">
        <Image
          src="https://links.papareact.com/ocw"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="relative w-10 h-10 sm:hidden cursor-pointer">
        <Image src="https://links.papareact.com/jjm" layout="fill" />
      </div>
      <div className="relative  mt-1  p-3 rounded-md  hidden sm:inline-block ">
        <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
          <input className="bg-gray-50 block w-full pl-10 sm:text-sm" type="text" placeholder="Search" />
      </div>

      <div className="flex items-center space-x-4 justify-end">
        <HomeIcon className="navBtn w-6"/>
        <MenuIcon className="h-6 w-6 sm:hidden cursor-pointer"/>
        <div className="relative navBtn"> 
          <PaperAirplaneIcon className="navBtn w-6 rotate-45" />
          <div className="absolute text-md w-5 h-5 -top-2 -right-3
          bg-red-500 rounded-full text-white
           flex justify-center items-center animate-pulse" > 3</div>
        </div>
        <PlusCircleIcon className="navBtn w-6" />
        <UserGroupIcon  className="navBtn w-6"/>
        <HeartIcon className="navBtn w-6" />
        <img src="../../dejanStojkic.jpg" alt="profile pic" className="w-10 rounded-full cursor-pointer" />
      </div>
    </div>
    </div>
  );
}

export default Header;
