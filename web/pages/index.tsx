import Head from "next/head";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid, Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

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
const profiles = [];

export default function Home() {
  return (
    <>
      <Head>
        <title>Bigstep - For Your Big Step</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="isolate bg-white">
        <main>
          <div className="max-w-6xl aspect-[3/1] mx-auto">
            <Swiper
              navigation={true}
              modules={[Autoplay, Navigation]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key={1}>
                <img
                  className="object-cover hover:transform hover:scale-105 hover:transition-transform"
                  src="/banner-example.jpeg"
                />
              </SwiperSlide>
              <SwiperSlide key={2}>
                <img
                  className="object-cover hover:transform hover:scale-105 hover:transition-transform"
                  src="/banner-example.jpeg"
                />
              </SwiperSlide>
              <SwiperSlide key={3}>
                <img
                  className="object-cover hover:transform hover:scale-105 hover:transition-transform"
                  src="/banner-example.jpeg"
                />
              </SwiperSlide>
              <SwiperSlide key={4}>
                <img
                  className="object-cover hover:transform hover:scale-105 hover:transition-transform"
                  src="/banner-example.jpeg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="max-w-6xl mx-auto my-6">
            <Swiper
              modules={[Grid, Navigation]}
              navigation={true}
              grid={{
                rows: 1,
              }}
              slidesPerView={7}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide key={11}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={12}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={13}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={14}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={15}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={16}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={17}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={18}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide key={19}>
                <div className="aspect-[3/1] flex items-center justify-center p-2">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      className="rounded-full p-2"
                      src="https://jammy.lge.co.kr/assets/common/img/main/f01_artist_list_12.png"
                    />
                    <div className="text-xs md:text-base my-1">Juliet</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="w-full flex flex-col gap-2 px-0">
              {activities.map((activity) => (
                <div
                  key={activity.title}
                  className={
                    activity.txtColor +
                    " " +
                    // "bg-[#" +
                    // "FFFFFF" +
                    // "]" +
                    " " +
                    "py-2 px-2 md:px-14"
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
        </main>
      </div>
    </>
  );
}
