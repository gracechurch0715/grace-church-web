import styled from "styled-components";
import { Link } from "react-router-dom";

import WRAPPER_WIDTH from "components/common/wrapperWidth";
import COLORS from "components/common/colors";

import logo from "assets/images/logo.svg";

const Header = () => {
  return (
    <header className="border-0 border-b border-gray-light">
      <InnerWrapper>
        <h1>
          <img src={logo} alt="grace church" />
        </h1>
        <div className="flex gap-5">
          <MenuItem
            to="https://blog.naver.com/gracechurch0715/223326818182"
            target="_blank"
          >
            설교말씀
          </MenuItem>
          <MenuItem to="notice">공지사항</MenuItem>
        </div>
      </InnerWrapper>
    </header>
  );
};

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${WRAPPER_WIDTH}px;
  height: 80px;
  margin: 0 auto;
`;

const MenuItem = styled(Link)`
  font-size: 16px;
  font-weight: 500;

  &:hover {
    color: ${COLORS.PRIMARY};
  }
`;

export default Header;
