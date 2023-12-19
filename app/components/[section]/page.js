"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import React, { useState } from "react";
import { getComponentById } from "./utils";
import WithLineNumbers from "(@components/WithLineNumbers)";

const page = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");

  const [isCode, setIsCode] = useState(true);
  const [isCopy, setIsCopy] = useState(false);
  const router = useRouter();
  const { query } = router;

  // const data = router.query.data;
  console.log(data);

  const componentsObject = getComponentById(data);
  console.log("componentsObject", componentsObject);
  const [toggleStates, setToggleStates] = useState(
    componentsObject?.components?.map(() => true) || []
  );

  const handleToggle = (index) => {
    console.log("index", index);
    setToggleStates((prevToggleStates) => {
      const newToggleStates = [...prevToggleStates];
      newToggleStates[index] = !newToggleStates[index];
      return newToggleStates;
    });
  };

  console.log("toggleStates", toggleStates);
  const handleCopy = (code) => {
    console.log("handleCopy");
    setIsCopy(true);
    navigator.clipboard
      .writeText(code)
      .then(() => {
        console.log("Text copied to clipboard:", code);
        // You can also show a success message or perform any other action after copying
      })
      .catch((error) => {
        console.error("Error copying text to clipboard:", error);
        // Handle any errors that might occur during copying
      });
    setTimeout(() => {
      setIsCopy(false);
    }, 2000);
  };
  console.log(isCode);
  return (
    <div className="w-[80%] mx-auto max-w-[1400px] flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <div className="flex text-gray-600 gap-1 items-center">
          {decodeURIComponent(params.section)} / Page Section
        </div>
        <h1 className="text-black text-3xl font-semibold ">
          {componentsObject?.name}
        </h1>
      </div>
      <div className="flex flex-col gap-4 z-50">
        {componentsObject?.components?.map((item, index) => (
          <>
            <div className="flex justify-between items-center">
              <h1>{item.name}</h1>
              <div className="flex items-center gap-2">
                <div className="flex bg-gray-300 rounded-lg gap-1">
                  <button
                    type="button"
                    onClick={() => handleToggle(index)}
                    className={`inline-flex items-center  ${
                      toggleStates[index] ? "bg-indigo-600" : "bg-transparent"
                    } w-28 gap-x-1.5 rounded-md z-50  cursor-pointer px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Preview
                  </button>
                  <button
                    onClick={() => handleToggle(index)}
                    type="button"
                    className={`inline-flex items-center  ${
                      toggleStates[index] ? "bg-transparent" : "bg-indigo-600"
                    } w-28 gap-x-1.5 rounded-md z-50 cursor-pointer px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                    Code
                  </button>
                </div>
                <button
                  className="cursor-pointer z-50 relative"
                  onClick={() => handleCopy(item.code)}
                >
                  <svg
                    class="h-8 w-8 stroke-slate-400 transition group-hover:rotate-[-4deg] group-hover:stroke-slate-600"
                    fill="none"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M12.9975 10.7499L11.7475 10.7499C10.6429 10.7499 9.74747 11.6453 9.74747 12.7499L9.74747 21.2499C9.74747 22.3544 10.6429 23.2499 11.7475 23.2499L20.2475 23.2499C21.352 23.2499 22.2475 22.3544 22.2475 21.2499L22.2475 12.7499C22.2475 11.6453 21.352 10.7499 20.2475 10.7499L18.9975 10.7499"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M17.9975 12.2499L13.9975 12.2499C13.4452 12.2499 12.9975 11.8022 12.9975 11.2499L12.9975 9.74988C12.9975 9.19759 13.4452 8.74988 13.9975 8.74988L17.9975 8.74988C18.5498 8.74988 18.9975 9.19759 18.9975 9.74988L18.9975 11.2499C18.9975 11.8022 18.5498 12.2499 17.9975 12.2499Z"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.7475 16.2499L18.2475 16.2499"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M13.7475 19.2499L18.2475 19.2499"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <g class="opacity-0">
                      <path
                        d="M15.9975 5.99988L15.9975 3.99988"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M19.9975 5.99988L20.9975 4.99988"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M11.9975 5.99988L10.9975 4.99988"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </g>
                  </svg>
                  {isCopy && (
                    <div className="bg-slate-800 p-2 rounded-md absolute text-white top-[-40px] ">
                      COPIED!
                    </div>
                  )}
                </button>
              </div>
            </div>
            <div>
              {toggleStates[index] ? (
                <item.renderComponents />
              ) : (
                <WithLineNumbers Code={item.code} />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default page;
