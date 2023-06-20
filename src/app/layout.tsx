//@ts-nocheck
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { UserProvider } from "@/app/context/user";

export const metadata = {
  title: "B5 Offical Booking",
  description: "B5 Offical Booking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <Toaster position="top-right" />
        <body>{children}</body>
      </UserProvider>
    </html>
  );
}
