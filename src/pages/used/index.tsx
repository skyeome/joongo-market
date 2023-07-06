import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "../../components/commons/layout";
import UsedItemList from "../../components/units/used/list/UsedList.index";

const Page: NextPageWithLayout = () => {
  return <UsedItemList />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
