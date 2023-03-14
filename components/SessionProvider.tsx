"use client";

import { SessionProvider as Provider } from "next-auth/react";
import { Session } from "next-auth";
import { type } from "os";

type props = {
  children: React.ReactNode;
  session: Session | null;
};

const SessionProvider = ({ children, session }: props) => {
  return <Provider>{children}</Provider>;
};

export default SessionProvider;
