import { auth } from "./firebase";
import Cookies from "universal-cookie";
const cookies = new Cookies();
export const getAndRefreshToken = async () => {
  try {
    const token = await auth?.currentUser?.getIdToken(true);
    cookies.set("token", token);
    return token;
  } catch (err: any) {
    cookies.remove("token");
    throw new Error(err);
  }
};
