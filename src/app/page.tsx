//@ts-nocheck
"use client";
import { useUser } from "@/app/context/user";
import { googleSignIn } from "@/services/firebase";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
export default function Home() {
  const { isLogin, Login, Logout } = useUser();
  const router = useRouter();
  const GoogleSignIn = async () => {
    try {
      await googleSignIn();
      await Login();
      toast.success("Login Success !");
      router.push("/booked");
    } catch (err) {
      console.log(err);
      alert(err);
      // router.push("/");
    }
  };
  const handleClick = async () => {
    if (!isLogin) {
      await GoogleSignIn();
    } else {
      router.push("/booked");
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col space-y-12 justify-center items-center relative">
      <Image
        src={"/party.jpg"}
        width={1000}
        height={1000}
        className="w-full h-full absolute top-0 left-0 -z-20 opacity-80"
        alt="party"
      ></Image>
      <h1
        style={{ textShadow: "5px 5px 10px #000000" }}
        className="md:text-8xl text-6xl text-center font-bold"
      >
        Welcome to <span className="text-pink-600"> B5 </span> official
      </h1>
      <botton
        onClick={handleClick}
        class="flex items-center justify-center gap-2 rounded-xl border-4 border-black bg-pink-600 px-8 py-4 font-bold shadow-[6px_6px_0_0_#000] transition hover:shadow-none focus:outline-none focus:ring text-black active:bg-pink-50"
        href="/booked"
      >
        Book Now
        <span aria-hidden="true" role="img">
          🍾
        </span>{" "}
      </botton>
    </div>
  );
}
