import styled from "styled-components";
import COLORS from "components/common/colors";
import Notice from "types/Notice";

type Align = "left" | "right" | "center";

interface Props {
  notices: Notice[];
}

const NoticeList = ({ notices }: Props) => {
  return (
    <Table>
      <tbody>
        {notices.map((notice) => {
          const { id, title, content, date } = notice;
          return (
            <Tr key={id}>
              <Td>
                <Title>{title}</Title>
                <Content>{content}</Content>
              </Td>
              <Td $align="right">
                <Date>{date}</Date>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  table-layout: fixed;
  border-top: 2px solid ${COLORS.PRIMARY_DARK};
`;

const Td = styled.td<{ $align?: Align }>`
  padding: 30px 20px;
  vertical-align: middle;
  text-align: ${({ $align }) => $align || "left"};

  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    text-align: left;
    padding: 0 20px;
  }
`;

const Tr = styled.tr`
  border-bottom: 1px solid ${COLORS.GRAY_LIGHT};

  @media screen and (max-width: 767px) {
    display: block;
    width: 100%;
    padding: 26px 0;
  }
`;

const Title = styled.p`
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 24px;
  color: #000;
  letter-spacing: -2.4px;
  line-height: 130%;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin: 0;
    letter-spacing: -1px;
  }
`;

const Content = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 16px;
  color: #555;
  letter-spacing: -1px;
`;

const Date = styled.p`
  font-size: 16px;
  color: #929292;

  @media screen and (max-width: 767px) {
    font-size: 14px;
    margin-top: 10px;
  }
`;

export default NoticeList;
