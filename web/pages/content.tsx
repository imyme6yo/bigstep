import Head from "next/head";
import { InboxIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <Head>
        <title>BIG 컨텐츠 - 블록체인 정보</title>
      </Head>
      <div className="w-full flex flex-col items-center text-md text-center">
        {/* <img
          className="w-full aspect-[5/1] object-cover mb-10"
          src="/assets/images/books.jpeg"
          alt="slogan-white"
        /> */}
        <div className="relative lg:px-8">
          <div className="mx-auto max-w-3xl pt-10 pb-10 sm:pt-24 sm:pb-20">
            <div>
              <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <div className="relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  <span className="text-gray-600">
                    현재 진행중인 프로젝트.{" "}
                    <Link
                      href="/service"
                      className="font-semibold text-carrot-600"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      살펴보기 <span aria-hidden="true">&rarr;</span>
                    </Link>
                  </span>
                </div>
              </div>
              <div>
                <h1 className="text-4xl mt-10 font-bold tracking-tight sm:text-center sm:text-6xl">
                  Dream Big
                </h1>
                <p className="mt-4 text-md leading-8 text-gray-600 sm:text-center">
                  블록체인에 전문적인 내용을 분석 & 연구하여 정기적인 출판을
                  진행합니다
                </p>
              </div>
              <div className="grid grid-cols-1 mt-10">
                <form action="#" method="POST" className="w-fullgap-y-6 ">
                  <label
                    htmlFor="email"
                    className="block m-2 text-sm font-medium text-gray-700"
                  >
                    *전자책 출시 알림을 받고 싶은신 분들은 아래에 메일을
                    입력해주세요.
                  </label>
                  <div className="flex gap-1 items-center justify-center">
                    <div className="w-72 mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        //   onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                        placeholder="username@example.com"
                        className="block w-full h-10 rounded-md border text-center border-black py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      />
                    </div>
                    <div className="mt-1 p-0">
                      <button className="h-full bg-transparent text-black font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
                        알람 받기
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <svg
                  className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                  viewBox="0 0 1155 678"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                    fillOpacity=".3"
                    d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                  />
                  <defs>
                    <linearGradient
                      id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                      x1="1155.49"
                      x2="-78.208"
                      y1=".177"
                      y2="474.645"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#9089FC" />
                      <stop offset={1} stopColor="#FF80B5" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-2xl font-semibold"></p>
          <p className="text-lg font-semibold">
            성공 노하우를 정제하고 정제했습니다. <br />
            빅스텝만의 전문지식으로 성공을 만드세요
          </p>
        </div>

        <div className="mt-6"></div>
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold mb-10">
            많은 분들의 요청으로 뉴스레터도 곧 출시할 계획입니다 : )
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute top-5 md:left-24 text-white z-20">
          <p className="md:text-3xl text-md text-white m-2">
            확실한 팬을 가진 커뮤니티를 가지고 싶은 프로젝트!
          </p>
          <p className="md:text-3xl text-md text-white m-2">
            세상을 바꿀 멋진 아이디어가 있는 프로젝트!
          </p>
          <p className="md:text-3xl text-md text-white m-2">
            웹3.0 생태계에 참여하고 싶은 프로젝트!
          </p>
        </div>
        <div className="w-full h-36 md:h-48 z-10 bg-black transform -rotate-2 scale-x-110 my-10"></div>
      </div>
      <div className="py-20"></div>
    </>
  );
};
export default Content;
