import styled from "styled-components";

import COLORS from "components/common/colors";
import WRAPPER_WIDTH from "components/common/wrapperWidth";
import NoticeContent from "components/templates/notice/Content";

const Notice = () => {
  return (
    <Container>
      <Title>공지사항</Title>
      <NoticeContent />
    </Container>
  );
};

const Container = styled.section`
  max-width: ${WRAPPER_WIDTH}px;
  margin: 0 auto;
  padding: 120px 30px;

  @media screen and (max-width: 1023px) {
    padding: 80px 30px;
  }
`;

const Title = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  font-size: 40px;
  color: ${COLORS.PRIMARY_DARK};
  letter-spacing: -3px;
  line-height: 130%;

  @media screen and (max-width: 1023px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 40px;
    font-size: 24px;
    letter-spacing: -1px;
  }
`;

export default Notice;
