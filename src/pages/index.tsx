import Head from "next/head";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "../components/commons/layout";
import UsedItemList from "../components/units/used/list/UsedList.index";

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>중고 마켓</title>
        <meta name="description" content="중고 마켓 홈페이지 입니다." />
      </Head>
      <UsedItemList />
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
