import styled from "styled-components";
import COLORS from "components/common/colors";

const Footer = () => {
  return (
    <Container>
      <Contact>138-814, 서울시 송파구 마천1동 311-67(마천로61길 22)</Contact>
      <Contact>jblgracechurch@naver.com</Contact>
      <Copy>COPYRIGHT 2023 은혜교회. ALL RIGHTS RESERVED.</Copy>
    </Container>
  );
};

const Container = styled.footer`
  border-top: 1px solid ${COLORS.GRAY_LIGHT};
  padding: 80px 20px;
  text-align: center;
`;

const Contact = styled.p`
  font-size: 16px;
  color: ${COLORS.PRIMARY_DARK};
  letter-spacing: -1px;
`;

const Copy = styled.p`
  margin-top: 30px;
  font-size: 14px;
  color: #b7b7b7;
  font-style: italic;
  letter-spacing: -1px;
`;

export default Footer;
