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
      <colgroup>
        <col width="*" />
        <col width="200px" />
      </colgroup>
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
`;

const Tr = styled.tr`
  border-bottom: 1px solid ${COLORS.GRAY_LIGHT};
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
`;

const Content = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 16px;
  color: #555;
  letter-spacing: -1.6px;
`;

const Date = styled.p`
  font-size: 16px;
  color: #929292;
`;

export default NoticeList;
