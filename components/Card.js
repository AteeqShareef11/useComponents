"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Card = ({ item }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/components/section?data=${item.id}`);
  };

  return (
    <div className="flex w-56 h-60 flex-col gap-4" onClick={handleClick}>
      <img src={item.image} alt="" />
      <h1>{item.name}</h1>
      <p>{item.noOfComponents} components</p>
    </div>
  );
};

export default Card;
