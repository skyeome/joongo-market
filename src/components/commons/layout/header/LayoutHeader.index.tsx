import Image from "next/image";
import * as S from "./LayoutHeader.styles";

export default function LayoutHeader(): JSX.Element {
  return (
    <header>
      <S.LogoWrap>
        <S.Logo>
          <Image src="/joongo-market-logo.webp" width={296} height={42} />
        </S.Logo>
      </S.LogoWrap>
    </header>
  );
}
