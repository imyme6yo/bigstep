import { useState, useEffect } from "react";
// import firebase from "firebase/app";

import Head from "next/head";
import Script from "next/script";

import { Inter } from "@next/font/google";
import { Switch } from "@headlessui/react";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import Link from "next/link";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactPage() {
  const [agreed, setAgreed] = useState(false);
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [content, setContent] = useState("");
  const [valid, setValid] = useState(false);
  const btnStyle =
    "w-full bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-gray-100 rounded";

  useEffect(() => {
    setValid(agreed && company !== "" && email !== "" && content !== "");
  }, [agreed, company, email, content]);

  const makeInquery = async (token: any) => {
    console.log(token);
    if (agreed === true) {
      const firestore = getFirestore();
      const col = collection(firestore, "inquiries");
      const inquiry = {
        privacy: agreed,
        company,
        email,
        phone,
        content,
      };
      await addDoc(col, inquiry);
      window.location.reload();
    }
  };

  return (
    <>
      <Head>
        <title>BITSTEP - 문의하기</title>
      </Head>
      <Script src="https://www.google.com/recaptcha/api.js"></Script>
      <main>
        <div className="overflow-hidden bg-white py-16 px-6 lg:px-8 lg:py-24">
          <div className="relative mx-auto max-w-xl">
            <svg
              className="absolute left-full translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <svg
              className="absolute right-full bottom-0 -translate-x-1/2 transform"
              width={404}
              height={404}
              fill="none"
              viewBox="0 0 404 404"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="85737c0e-0916-41d7-917f-596dc7edfa27"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={404}
                fill="url(#85737c0e-0916-41d7-917f-596dc7edfa27)"
              />
            </svg>
            <div>
              <h2 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                문의하기
              </h2>
              <p className="mt-8 text-center text-lg leading-6 text-gray-500">
                협업을 원하는 분들은 환영합니다
              </p>
              <p className="mt-4 text-lg leading-6 text-black">
                빅스텝은 성공적인 블록체인/NFT 프로젝트를 위해, 하나의
                프로젝트만 진행하는 것을 원칙으로 하고 있습니다. 현재 많은
                분들의 문의와 협업요청으로 인해 답변이 늦어지는점 양해바랍니다.
              </p>
              <p className="mt-4 text-md leading-6 text-black">
                *저희 팀에 합류를 원하시는 분들도 이력서/포트폴리오를 자유로운
                양식의 파일로 첨부하여 연락주세요. (열정이 경험보다 중요합니다.
                혹시 경험이 없다고 생각해서 망설이지 마세요)
              </p>
            </div>
            <div className="mt-12">
              <form
                action="#"
                method="POST"
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div className="sm:col-span-2">
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-700"
                  >
                    *회사명/담당자 (필수)
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      onChange={(e) => setCompany(e.target.value)}
                      autoComplete="organization"
                      className="block w-full rounded-md border border-black py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    *이메일 (필수)
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="block w-full rounded-md border border-black py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm font-medium text-gray-700"
                  >
                    담당자 연락처
                  </label>
                  <div className="mt-1">
                    <input
                      name="phone-number"
                      id="phone-number"
                      autoComplete="tel"
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full rounded-md border border-black py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    *내용 (필수)
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      onChange={(e) => setContent(e.target.value)}
                      className="block w-full rounded-md border border-black py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                      placeholder={"내용을 입력해주세요"}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Switch
                        checked={agreed}
                        onChange={setAgreed}
                        className={classNames(
                          agreed ? "bg-carrot-600" : "bg-gray-200",
                          "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-carrot-500 focus:ring-offset-2"
                        )}
                      >
                        <span className="sr-only">개인정보처리방침 동의</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            agreed ? "translate-x-5" : "translate-x-0",
                            "inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                          )}
                        />
                      </Switch>
                    </div>
                    <div className="ml-3">
                      <p className="text-base text-gray-500">
                        <Link
                          href="/policy/privacy"
                          className="font-medium text-gray-700 underline"
                        >
                          개인정보처리방침
                        </Link>{" "}
                        동의.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <button
                    data-sitekey="6LejjQYkAAAAAJo1EcGFbsHno7xs_i5oktOEnc_x"
                    data-callback="onSubmit"
                    data-action="submit"
                    className={btnStyle}
                    disabled={!valid}
                  >
                    문의하기
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
