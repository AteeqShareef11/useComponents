"use client";

import { useParams } from "next/navigation";
import { CheckCircleIcon } from "@heroicons/react/20/solid";

import React, { useState } from "react";

const page = () => {
  const params = useParams();
  const [isCode, setIsCode] = useState(false);

  const toggle = () => {
    setIsCode(!isCode);
  };
  console.log(params);
  return (
    <div className="w-[80%] mx-auto max-w-[1400px] flex flex-col gap-12">
      <div className="flex flex-col gap-2">
        <div className="flex text-gray-600 gap-1 items-center">
          {decodeURIComponent(params.section)} / Page Section
        </div>
        <h1 className="text-black text-3xl font-semibold ">
          {decodeURIComponent(params.section)}
        </h1>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1>Simple centered</h1>
          <div className="flex items-center gap-2">
            <div className="flex bg-gray-300 rounded-lg gap-1">
              <button
                type="button"
                onClick={toggle}
                className={`inline-flex items-center  ${
                  isCode ? "bg-indigo-600" : "bg-transparent"
                } w-28 gap-x-1.5 rounded-md  px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
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
                onClick={toggle}
                type="button"
                className={`inline-flex items-center  ${
                  isCode ? "bg-transparent" : "bg-indigo-600"
                } w-28 gap-x-1.5 rounded-md  px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
