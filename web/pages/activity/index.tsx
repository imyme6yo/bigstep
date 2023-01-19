import Head from "next/head";
import { StarIcon } from "@heroicons/react/20/solid";

const products1 = [
  {
    id: 1,
    name: "[4차] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 2,
    name: "[5차] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 3,
    name: "[6차][모집중][마감임박] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 4,
    name: "[7차][모집중] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },

  {
    id: 5,
    name: "[8차][모집예정] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 6,
    name: "[9차][모집예정] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 7,
    name: "[10차][모집예정] 블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

const free = [
  {
    id: 1,
    name: "[특강] 블록체인 비즈니스 리터리시 과정",
    href: "#",
    price: "30000",
    discountPrice: "0",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
];

const products = [
  {
    id: 1,
    name: "[특강] 블록체인 비즈니스 리터리시 과정",
    href: "#",
    price: "30000",
    discountPrice: "0",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "[특강] 블록체인 실무",
    href: "#",
    price: "30000",
    discountPrice: "30000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "[블록체인] Solidity+",
    href: "#",
    price: "50000",
    discountPrice: "50000",
    rating: 5,
    isEnd: false,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "블록체인 민팅페이지 만들기",
    href: "#",
    price: "50000",
    discountPrice: "500000",
    rating: 5,
    isEnd: true,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  // More products...
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const BigActivity = () => {
  return (
    <>
      <Head>
        <title>BIG 서비스 - 블록체인을 위한 빅스텝의 서비스입니다</title>
      </Head>
      <div className="flex flex-col items-center text-md text-center">
        <div className="mt-20"></div>
        <img
          className="max-w-lg"
          src="/assets/images/slogan-dark.png"
          alt="slogan-white"
        />
        <div className="text-2xl my-5">
          빅스텝은 각 분야 전문가와 함께 <span>웹3.0 생태계</span>를 구축해
          나가고 있습니다.
        </div>
        <div className="text-2xl my-5">
          현직 스타트업 CEO, 변호사, 마케터, 개발자등 최고의 전문과들과
          함께하세요
        </div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              블록체인 커리어 & 전문가 과정
            </h2>
            {/* <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products1.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className={
                      product.isEnd
                        ? "brightness-50 h-full w-full object-cover object-center group-hover:opacity-75"
                        : "h-full w-full object-cover object-center group-hover:opacity-75"
                    }
                  />
                </div>
                <h3 className="mt-4 h-10 text-sm text-gray-700 text-start  line-clamp-2">
                  {product.isEnd ? <>[종료]</> : <></>} {product.name}
                </h3>
                <div className="flex justify-between">
                  <p className="mt-1 text-lg font-medium  text-gray-900">
                    {product.discountPrice} 원
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                {product.price !== product.discountPrice && (
                  <div className="flex justify-start text-gray-600 line-through">
                    {product.price}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              추천 강의
            </h2>
            {/* <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className={
                      product.isEnd
                        ? "brightness-50 h-full w-full object-cover object-center group-hover:opacity-75"
                        : "h-full w-full object-cover object-center group-hover:opacity-75"
                    }
                  />
                </div>
                <h3 className="mt-4 h-10 text-sm text-gray-700 text-start line-clamp-2">
                  {product.isEnd ? <>[종료]</> : <></>} {product.name}
                </h3>
                <div className="flex justify-between">
                  <p className="mt-1 text-lg font-medium  text-gray-900">
                    {product.discountPrice} 원
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                {product.price !== product.discountPrice && (
                  <div className="flex justify-start text-gray-600 line-through">
                    {product.price}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              스터디
            </h2>
            {/* <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className={
                      product.isEnd
                        ? "brightness-50 h-full w-full object-cover object-center group-hover:opacity-75"
                        : "h-full w-full object-cover object-center group-hover:opacity-75"
                    }
                  />
                </div>
                <h3 className="mt-4 h-10 text-sm text-gray-700 text-start line-clamp-2">
                  {product.isEnd ? <>[종료]</> : <></>} {product.name}
                </h3>
                <div className="flex justify-between">
                  <p className="mt-1 text-lg font-medium  text-gray-900">
                    {product.discountPrice} 원
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                {product.price !== product.discountPrice && (
                  <div className="flex justify-start text-gray-600 line-through">
                    {product.price}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              무료 강의
            </h2>
            {/* <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all favorites
              <span aria-hidden="true"> &rarr;</span>
            </a> */}
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {free.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-[3/2] w-full overflow-hidden rounded-lg bg-gray-200 ">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 h-10 text-sm text-gray-700 text-start line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex justify-between">
                  <p className="mt-1 text-lg font-medium  text-gray-900">
                    {product.discountPrice}
                  </p>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.rating > rating
                            ? "text-yellow-400"
                            : "text-gray-200",
                          "flex-shrink-0 h-5 w-5"
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                {product.price !== product.discountPrice && (
                  <div className="flex justify-start text-gray-600 line-through">
                    {product.price}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BigActivity;
