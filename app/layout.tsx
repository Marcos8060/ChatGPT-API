import SessionProvider from "@/components/SessionProvider";
import SideBar from "@/components/SideBar";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/hello/auth/[...nextauth]";
import Login from "@/app/Login";

export const metadata = {
  title: "ChatGPT Clone",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body>
        <SessionProvider session={session}>
          {/* check if user has a current session available */}
          {!session ? 
          <Login />
          :
          <div className="flex">
            <div className="w-3/12 text-white overflow-y-auto bg-[#202123] p-2">
              <SideBar />
            </div>
            <div className="bg-[#343541] flex-1">{children}</div>
          </div>
          }
          
        </SessionProvider>
      </body>
    </html>
  );
}
