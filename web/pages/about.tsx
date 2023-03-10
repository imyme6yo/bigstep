import Head from "next/head";

const members = [
  {
    id: 1,
    fields: "블록체인 개발/설계",
    title: "블록체인랩 CEO",
    href: "#",
    name: "이서준",
    isEnd: false,
    imageSrc: "/assets/members/sj.jpg",
    imageAlt: "Lee seojoon.",
  },
  {
    id: 2,
    fields: "사업설계 ",
    title: "오디세이랩 CEO",
    href: "#",
    name: "박성연",
    imageSrc:
      "https://img.freepik.com/premium-photo/close-up-tender-feminine-stylish-young-female-turn-camera-stand-profile-look-camera-amused-joyful-satisfied-getting-rid-acne-taking-care-facial-blemish-stand-blue-background-delighted_1258-57883.jpg?w=360",
    imageAlt: "Lee seojoon.",
  },
  {
    id: 3,
    fields: "브랜딩, 퍼포먼스 마케팅",
    title: "마케팅 팀장",
    href: "#",
    name: "성윤석",
    imageSrc:
      "data:image/jpeg;base64,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",
    imageAlt: "Lee seojoon.",
  },
];

const About = () => {
  return (
    <>
      <Head>
        <title>Bigstep - Big Fun Community</title>
      </Head>
      <div className="h-100 w-screen text-center bg-cover bg-center bgrepeat bg-[url('/assets/images/bg-grid.png')]">
        <img src="/assets/images/bg-top.png" alt="" />
        <div className="flex flex-col items-center">
          <div className="text-xl">About</div>
          <div className="w-32">
            <img src="/assets/images/logo-black.png" alt="" />
          </div>
          <div className="mt-20"></div>
          <div>
            <p className="text-xl">환영합니다.</p>
            <p className="text-xl">이렇게 유쾌한 커뮤니티는 처음이죠?</p>
          </div>
          <div className="w-96 h-96">
            <div className="w-full h-full bg-center bg-contain bg-[url('/assets/images/bg-middle.png')]">
              <div className="flex flex-col h-full items-center justify-center">
                <p className="text-xl my-1 font-bold">
                  <span className="font-bold">Bitstep</span>은 취향이 관심으로
                </p>
                <p className="text-xl my-1 font-bold">관심이 커뮤니티로</p>
                <p className="text-xl my-1 font-bold">
                  커뮤니티가 웹3.0으로 만들어지는
                </p>
                <p className="text-xl my-1 font-bold">웹3.0 커뮤니티입니다</p>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <p className="text-xl">여기에서만 블록체인 기술로</p>
            <p className="text-xl font-bold">
              상상을 현실로 만들고 웹3.0 커뮤니티를 만들 수 있습니다
            </p>
          </div>
          <div className="mt-20"></div>
          <div>
            <p className="text-xl">커뮤니티 참여로</p>
            <p className="text-xl">
              세상을 바꾸는 <span className="font-bold">'빅스텝'</span>에
              동참하세요
            </p>
          </div>
          <div className="mt-20"></div>
          <div className="h-40">
            <div className="relative w-screen h-full bg-black transform -rotate-3 pt-5">
              <div className="text-white transform rotate-3">
                <p className="text-xl my-1">
                  <span className="">Bigstep</span>은 가장 활성화된 커뮤니티를
                  제공합니다
                </p>
                <p className="text-xl my-1">
                  <span className="">Artois(아르투아)</span>는 예술품을 매개로한
                  웹3.0 커뮤니티입니다
                </p>
                <p className="text-xl my-2">
                  당신만의 상상력으로 웹3.0 세상을 만들어 보세요!
                </p>
              </div>
            </div>
          </div>
          <div className="mt-20"></div>
          <div className="p-20">
            <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="sm:flex sm:items-baseline sm:justify-between">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  팀원
                </h2>
                {/* <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
              </div>
              <p className="text-lg text-start my-10 ">
                각 분야의 전문가 들이 모여서 프로젝트를 진행합니다
              </p>
              <p className="text-start my-10">
                블록체인 전문가인 스타트업 CEO, 개발자, 마케터가 <br />
                여러분의 프로젝트가 성공할 수 있도록 돕습니다.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {members.map((member) => (
                  <a key={member.id} href={member.href} className="group">
                    <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-200">
                      <img
                        src={member.imageSrc}
                        alt={member.imageAlt}
                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 h-10 text-sm font-medium text-gray-700 text-start line-clamp-2">
                      *전문분야: {member.fields}
                    </h3>
                    <div className="flex justify-between">
                      <p className="mt text-lg font-medium  text-gray-900">
                        {member.name}{" "}
                        <span className="text-sm">({member.title})</span>
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="text-xl">웹3.0 커뮤니티</div>
          <div className="w-40">
            <img src="/assets/images/logo.png" alt="" />
          </div>
          <div className="mt-32"></div>
        </div>
      </div>
    </>
  );
};
export default About;
