import React from "react";
import Card from "./Card";

const page = () => {
  return (
    <div className="flex w-full gap-6 p-10">
      <div className="w-[20%]">
        <h1>Page Section</h1>
      </div>
      <div className="flex flex-wrap gap-4 w-[80%]">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default page;
