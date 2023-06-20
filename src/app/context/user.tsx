//@ts-nocheck
"use client";
import React, { useContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { auth } from "@/services/firebase";
import { getAndRefreshToken } from "@/services/helper";

const UserContext = React.createContext({});

export const UserProvider = ({ children }: any) => {
  const cookies = new Cookies();

  const [isLogin, setIsLogin] = useState(false);

  const cookieConfig = {
    path: "/",
    maxAge: 60 * 60 * 24,
    secure: true,
  };

  const Login = async () => {
    try {
      await getAndRefreshToken();
      setIsLogin(true);
    } catch (err) {
      console.log(err);
      alert("Please Login again");
    }
  };

  const Logout = async () => {
    await auth.signOut();
    cookies.remove("token");
    setIsLogin(false);
  };

  useEffect(() => {
    getAndRefreshToken().catch(() => setIsLogin(false));
  }, []);
  return (
    <UserContext.Provider value={{ isLogin, Login, Logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const { isLogin, Login, Logout } = useContext(UserContext);
  return { isLogin, Login, Logout };
};
