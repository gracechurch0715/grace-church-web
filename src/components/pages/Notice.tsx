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
  padding: 120px 0;
`;

const Title = styled.h2`
  margin-bottom: 60px;
  text-align: center;
  font-size: 40px;
  color: ${COLORS.PRIMARY_DARK};
  letter-spacing: -3px;
  line-height: 130%;
`;

export default Notice;
