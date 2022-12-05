import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { trpc } from "../utils/trpc";

import "../styles/globals.css";
import Layout from "../components/Layout";
import FormContextProvider from "../context/FormContext";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <FormContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </FormContextProvider>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
