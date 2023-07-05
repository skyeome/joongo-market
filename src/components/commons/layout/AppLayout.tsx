// 렌더링할 화면의 가로폭을 고정하고, 가운데로 위치시키는 레이아웃.

import styled from "@emotion/styled";

const AppLayout = (props: { children: React.ReactNode }) => {
  return <FixedWidth>{props.children}</FixedWidth>;
};

const FixedWidth = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;
export default AppLayout;
