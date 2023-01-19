import Head from "next/head";

const activities = [
  {
    title: "Jammy 래플",
    subtitle: "Jammy 래플 응모하고 <br />워니비 아이템의 주인공이 되세요",
    bgColor: "#E66A40",
    txtColor: "text-white",
    image: "/assets/images/teamwork.png",
  },
  {
    title: "MBTI 유형별 찰떡궁합 노트북 찾기",
    subtitle:
      "나에게 맞는 노트북이 따로 있다고?<br />찰떡궁합 노트북을 알아보고, 1000g 받아보세요!",
    bgColor: "#CCCCCC",
    txtColor: "text-black",
    image: "/assets/images/teamwork.png",
  },
  {
    title: "나만의 노트북 꾸미기",
    subtitle: "취향대로 만드는 하나뿐인<br />노트북 스킨!",
    bgColor: "#EFBC59",
    txtColor: "text-black",
    image: "/assets/images/teamwork.png",
  },
];

const Community = () => {
  return (
    <>
      <Head>
        <title>BIG 커뮤니티 - 블록체인 네트워크</title>
      </Head>

      <div className="flex flex-col items-center text-md text-center">
        <img
          className="max-w-lg"
          src="/assets/images/slogan-dark.png"
          alt="slogan-white"
        />

        <div className="text-2xl my-5">
          빅스텝은 블록체인 정보 공유{" "}
          <span className=" font-bold">네트워크</span> 커뮤니티입니다
        </div>

        <div className="my-5">
          네트워크 커뮤니티는 커뮤니티의 구성원을 연결하는데 목적이 있습니다.
        </div>
        <div className="flex flex-col gap-5 my-10">
          <p>
            <button className="bg-transparent w-60 inline-flex items-center justify-center text-black font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
              <img
                src="/assets/icons/discord-icon.svg"
                className="h-5 w-5 mr-1"
              />
              BIG커뮤니티 디스코드
            </button>
          </p>
          <p>
            <button className="bg-transparent w-60 inline-flex items-center justify-center text-black font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
              <img
                src="/assets/icons/twitter-icon.svg"
                className="h-5 w-5 mr-1"
              />
              BIG커뮤니티 트위터
            </button>
          </p>
          <p>
            <button className="bg-transparent w-60 inline-flex items-center justify-center text-black font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
              <img
                src="/assets/icons/instagram-icon.svg"
                className="h-5 w-5 mr-1"
              />
              BIG커뮤니티 인스타그램
            </button>
          </p>
          <p>
            <button className="bg-transparent w-60 inline-flex items-center justify-center text-black font-semibold  py-2 px-4 border border-black hover:border-transparent rounded">
              <img
                src="/assets/icons/kakaotalk-icon.svg"
                className="h-5 w-5 mr-1"
              />
              BIG커뮤니티 오픈카톡방
            </button>
          </p>
        </div>
        {/* <div className="my-5">
          <img src="/assets/images/teamwork.png" />
        </div> */}
        <div className="my-5">
          <br />
          웹3.0의 정신인 <span className="font-bold">참여</span>와{" "}
          <span className="font-bold">합의</span>를 바탕으로
          <br />
          구성원들이 연결되어 더 나은 가치를 실현합니다
          <br />
        </div>
        <div></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="w-full flex flex-col gap-2 mt-52 px-0">
          {activities.map((activity) => (
            <div
              className={
                activity.txtColor +
                " " +
                // "bg-[#" +
                // "FFFFFF" +
                // "]" +
                " " +
                "py-2 px-14"
              }
              style={{
                backgroundColor: activity.bgColor,
              }}
            >
              <div className="flex justify-between items-center">
                <div className="flex flex-col mb-2">
                  <div
                    className="font-black my-2"
                    dangerouslySetInnerHTML={{ __html: activity.title }}
                  ></div>
                  <div
                    className="text-xs"
                    dangerouslySetInnerHTML={{ __html: activity.subtitle }}
                  ></div>
                </div>
                <div>
                  <img className="w-32 object-cover" src={activity.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Community;
