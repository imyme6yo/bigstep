import { useState } from "react";

import { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const menu = [
  {
    label: "About Bigstep",
    link: "/about",
  },
  {
    label: "BIG 커뮤니티",
    link: "/community",
  },
  {
    label: "BIG 컨텐츠",
    link: "/content",
  },
  {
    label: "BIG 액티비티",
    link: "/activity",
  },
  {
    label: "BIG 뉴스",
    link: "/news",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  // {
  //   label: "AI",
  //   link: "/ai",
  // },
  // {
  //   label: "SERVICE",
  //   link: "/service",
  // },
];

const Navbar: NextPage = () => {
  const [defaultMenuItemStyle] = useState(
    "inline-flex items-center px-1 pt-1 text-md font-medium font-black text-gray-700 hover:text-black"
  );
  const [currentMenuItemStyle] = useState(
    "inline-flex items-center border-carrot-500 px-1 pt-1 text-md font-medium font-black text-black"
  );
  const [openStyle, setOpenStyle] = useState("hidden");
  const smMenuItemStyle =
    "w-96 inline-flex items-center py-4 px-7 text-md font-medium font-black text-gray-700 hover:text-black";
  const router = useRouter();

  const showMenu = () => {
    setOpenStyle("");
  };

  const dismissMenu = () => {
    setOpenStyle("hidden");
  };

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 my-5 hidden md:flex">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/">
              <img
                className="block h-10 w-auto"
                src="logo.png"
                alt="비트스텝 로고 스몰"
              />
            </Link>
            <div className="ml-6 flex space-x-1 lg:space-x-6">
              {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
              {menu.map((m) => (
                <Link
                  key={m.label}
                  className={
                    router.asPath === m.link
                      ? currentMenuItemStyle
                      : defaultMenuItemStyle
                  }
                  href={m.link}
                >
                  {m.label}
                </Link>
              ))}
            </div>
            <div className="px-5"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-3 pb-2 display md:hidden z-10">
        <div className="flex h-16 justify-center items-center">
          <div className="ml-6 flex space-x-1 lg:space-x-6">
            <Link href="/">
              <img
                className="block h-10 w-auto"
                src="logo.png"
                alt="비트스텝 로고 스몰"
              />
            </Link>
            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
            {/* {menu.map((m) => (
                <Link
                  key={m.label}
                  className={
                    router.asPath === m.link
                      ? currentMenuItemStyle
                      : defaultMenuItemStyle
                  }
                  href={m.link}
                >
                  {m.label}
                </Link>
              ))} */}
          </div>
          <div className="absolute right-0" onClick={() => showMenu()}>
            <Bars3Icon className="h-14 w-14 p-2" />
          </div>
        </div>
      </div>
      <div
        className={
          "fixed top-0 h-full w-screen z-10 bg-black bg-opacity-50 " + openStyle
        }
      >
        <div className="flex w-full h-full justify-end">
          <div className="flex flex-col bg-white">
            <div className="flex justify-end">
              <div onClick={() => dismissMenu()}>
                <XMarkIcon className="w-14 h-14 p-2" />
              </div>
            </div>
            {menu.map((m) => (
              <Link key={m.label} className={smMenuItemStyle} href={m.link}>
                {m.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
