import * as S from "./LayoutMain.styles";

export default function LayoutMain(props: {
  children: React.ReactNode;
}): JSX.Element {
  return <S.Main>{props.children}</S.Main>;
}
