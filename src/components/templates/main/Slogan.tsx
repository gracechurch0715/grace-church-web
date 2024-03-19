import styled from "styled-components";

import COLORS from "components/common/colors";
import WRAPPER_WIDTH from "components/common/wrapperWidth";

const BG_URL =
  "https://onedrive.live.com/embed?resid=C307F97E37B29271%21115&authkey=%21ALdvtSq7201Uulc&width=1920&height=500";

const Slogan = () => {
  return (
    <Container>
      <Inner>
        <Title>SLOGAN</Title>
        <Content>
          <strong>창조와 대속, 부활과 영생</strong>의 믿음으로
          <br />
          성령님이 역사하는 교회
        </Content>
      </Inner>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 500px;
  background: url(${BG_URL}) no-repeat center;
  background-size: cover;
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: ${WRAPPER_WIDTH}px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  font-size: 40px;
  color: ${COLORS.PRIMARY};
  letter-spacing: -2.4px;
`;

const Content = styled.p`
  &,
  strong {
    font-size: 64px;
    letter-spacing: -6px;
    font-weight: 300;
    line-height: 120%;
  }

  strong {
    font-weight: 700;
  }
`;

export default Slogan;
