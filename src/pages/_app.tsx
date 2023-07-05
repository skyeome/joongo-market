import type { ReactElement, ReactNode } from "react";
import "../styles/globals.css";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import ApolloSetting from "../components/commons/apollo";

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function App({
  Component,
  pageProps,
}: AppPropsWithLayout): ReactNode {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <ApolloSetting>
      <Component {...pageProps} />
    </ApolloSetting>
  );
}
