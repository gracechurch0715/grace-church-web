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
  padding: 0 20px;

  @media screen and (max-width: 1023px) {
    height: auto;
    padding: 80px 0;
  }
  @media screen and (max-width: 767px) {
    padding: 60px 30px;
    background-position: 70% center;
  }
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

  @media screen and (max-width: 1023px) {
    font-size: 32px;
  }
  @media screen and (max-width: 767px) {
    font-size: 24px;
    letter-spacing: -1px;
  }
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

  @media screen and (max-width: 1023px) {
    &,
    strong {
      font-size: 50px;
    }
  }
  @media screen and (max-width: 767px) {
    br {
      display: none;
    }

    &,
    strong {
      font-size: 30px;
      letter-spacing: -3px;
    }

    word-break: keep-all;
  }
`;

export default Slogan;
