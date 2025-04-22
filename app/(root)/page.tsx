import { auth } from "@/auth";
import React from "react";

const Home = async () => {
  const session = await auth();
  console.log(session);
  return (
    <>
      <h1 className="h1-bold px-10 pt-[100px]">
        Welcome to the world pf Next.js
      </h1>
    </>
  );
};

export default Home;
