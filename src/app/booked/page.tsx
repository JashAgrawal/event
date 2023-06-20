//@ts-nocheck
"use client";
import { useUser } from "@/app/context/user";
import { auth, googleSignIn } from "@/services/firebase";
import Image from "next/image";
import { useEffect, useState } from "react";
import party from "@/app/party.jpg";
export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    setName(auth.currentUser?.displayName);
  }, []);
  return (
    <div className="w-screen overflow-hidden h-screen flex flex-col space-y-12 justify-center items-center relative">
      <Image
        src={party}
        width={10000}
        height={10000}
        className="w-full h-full absolute top-0 left-0 -z-20 opacity-80 object-cover object-center"
        alt="party"
      ></Image>
      <h1
        style={{ textShadow: "5px 5px 10px #000000" }}
        className="md:text-8xl text-3xl flex justify-center w-full font-bold"
      >
        Congratulations <span className="mx-6 text-pink-600">{name}</span> ,
      </h1>
      <h3 className="md:text-5xl text-3xl w-full text-center">
        Your slot has been booked 🍾
      </h3>
    </div>
  );
}
