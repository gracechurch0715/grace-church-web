import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ddd;
`;

export default Layout;
