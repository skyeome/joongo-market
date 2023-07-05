import AppLayout from "./AppLayout";
import LayoutHeader from "./header/LayoutHeader.index";
import LayoutMain from "./content/LayoutMain.index";
import LayoutFooter from "./footer/LayoutFooter.index";

export default function Layout(props: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <AppLayout>
      <LayoutHeader />
      <LayoutMain>{props.children}</LayoutMain>
      <LayoutFooter />
    </AppLayout>
  );
}
