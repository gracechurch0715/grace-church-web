import styled from "styled-components";

import COLORS from "components/common/colors";
import WRAPPER_WIDTH from "components/common/wrapperWidth";

const BG_URL =
  "https://onedrive.live.com/embed?resid=C307F97E37B29271%21117&authkey=%21AJ_GvU4JhSiBb1Y&width=960&height=1000";

const IMG_URL =
  "https://onedrive.live.com/embed?resid=C307F97E37B29271%21116&authkey=%21ALM7J0NEiQQC3HY&width=480&height=300";

const arr = [0, 1, 2];

const Worship = () => {
  return (
    <Container>
      <div className="flex-1">
        <ul>
          {arr.map(() => (
            <li>
              <img src={IMG_URL} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <Right></Right>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 3000px;
  background: #154068;
  display: flex;
  justify-content: space-between;
`;

const Right = styled.div`
  flex: 1;
  position: sticky;
  top: 0;
  right: 0;
  height: 100vh;
  background: url(${BG_URL}) no-repeat center;
  background-size: cover;
`;

const Inner = styled.div``;

const Title = styled.h2``;

const Content = styled.p``;

export default Worship;
