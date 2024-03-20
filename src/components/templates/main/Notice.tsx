import styled from "styled-components";
import { Link } from "react-router-dom";

import COLORS from "components/common/colors";
import WRAPPER_WIDTH from "components/common/wrapperWidth";
import NoticeList from "components/common/NoticeList";

import notices from "datas/noties";

const Notice = () => {
  return (
    <Container>
      <Title>NOTICE</Title>
      <BtnMore to="notice">전체보기 + </BtnMore>
      <NoticeList notices={notices} />
    </Container>
  );
};

const Container = styled.section`
  max-width: ${WRAPPER_WIDTH}px;
  padding: 100px 30px;
  margin: 0 auto;
  text-align: center;

  @media screen and (max-width: 1023px) {
    padding: 80px 30px;
  }
`;

const Title = styled.h2`
  margin-bottom: 15px;
  font-size: 40px;
  color: ${COLORS.PRIMARY_DARK};
  letter-spacing: -2.4px;
  line-height: 130%;

  @media screen and (max-width: 1023px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
    letter-spacing: -1px;
  }
`;

const BtnMore = styled(Link)`
  margin-bottom: 60px;
  display: block;
  font-size: 20px;
  color: ${COLORS.PRIMARY};
  letter-spacing: -2.4px;
  line-height: 130%;

  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    font-size: 16px;
    letter-spacing: -2px;
  }
`;

export default Notice;
