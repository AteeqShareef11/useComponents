import React from "react";
import Card from "./Card";
import { Marketing } from "./Marketing/utils";

const page = () => {
  return (
    <div className="flex w-full gap-6 p-10">
      <div className="w-[20%]">
        <h1>Page Section</h1>
      </div>
      <div className="flex flex-wrap gap-4 w-[80%]">
        {Marketing.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default page;
