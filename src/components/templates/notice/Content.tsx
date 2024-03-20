import styled from "styled-components";

import NoticeList from "components/common/NoticeList";
import COLORS from "components/common/colors";

import notices from "datas/noties";

import arrowLeft from "assets/images/arrow-left.svg";
import arrowRight from "assets/images/arrow-right.svg";

const arr = [1, 2, 3, 4, 5];

const NoticeContent = () => {
  return (
    <>
      <NoticeList notices={notices} />
      <div className="flex items-center justify-center gap-5 mt-10">
        <Btn>
          <img src={arrowLeft} alt="" />
        </Btn>
        <ul className="flex gap-4 items-center md:gap-3">
          {arr.map((v, i) => (
            <Page key={i} $active={i === 0}>
              {i + 1}
            </Page>
          ))}
        </ul>
        <Btn>
          <img src={arrowRight} alt="" />
        </Btn>
      </div>
    </>
  );
};

const Page = styled.li<{ $active: boolean }>`
  padding: 5px;
  font-size: 16px;
  letter-spacing: -2px;
  line-height: 18px;
  color: ${({ $active }) => ($active ? COLORS.PRIMARY : COLORS.PRIMARY_DARK)};
  font-weight: ${({ $active }) => ($active ? 600 : 400)};

  &:hover {
    text-decoration: ${({ $active }) => ($active ? "none" : "underline")};
    cursor: pointer;
  }

  @media screen and (max-width: 1023px) {
    font-size: 14px;
  }
`;

const Btn = styled.button`
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    vertical-align: middle;
  }
`;

export default NoticeContent;
