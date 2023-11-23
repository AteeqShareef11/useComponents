import Card from "../Card";
import React from "react";

const page = () => {
  return (
    <div className="flex gap-6 p-10">
      <div className="">
        <h1>Page Section</h1>
      </div>
      <div className="flex flex-wrap gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => (
          <Card />
        ))}
      </div>
    </div>
  );
};

export default page;
