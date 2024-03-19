import styled from "styled-components";
import COLORS from "components/common/colors";

const BG_URL =
  "https://onedrive.live.com/embed?resid=C307F97E37B29271%21117&authkey=%21AJ_GvU4JhSiBb1Y&width=960&height=1000";

const worships = [
  {
    category: "주일예배",
    title: "하나님의 지혜인 십자가의 도",
    bibleVerse: "고전1:18-25",
    image:
      "https://onedrive.live.com/embed?resid=C307F97E37B29271%21116&authkey=%21ALM7J0NEiQQC3HY&width=480&height=300",
  },
  {
    category: "수요저녁예배",
    title: "부활복음",
    bibleVerse: "고전1:18-25",
    image:
      "https://onedrive.live.com/embed?resid=C307F97E37B29271%21116&authkey=%21ALM7J0NEiQQC3HY&width=480&height=300",
  },
  {
    category: "금요기도회",
    title: "거듭남",
    bibleVerse: "고전1:18-25",
    image:
      "https://onedrive.live.com/embed?resid=C307F97E37B29271%21116&authkey=%21ALM7J0NEiQQC3HY&width=480&height=300",
  },
];

const Worship = () => {
  return (
    <Container>
      <div className="flex-1">
        <div className="flex flex-col items-center py-30">
          <Title>WORSHIP</Title>
          <Line />
          <BibleText>
            너희 몸을 하나님이 기뻐하시는 거룩한 산제사로 드리라 (롬12:1)
          </BibleText>
          {worships.map(({ category, title, bibleVerse, image }) => (
            <div className="max-w-[480px] mt-25 text-center">
              <ImgWrap>
                <img src={image} alt="" />
              </ImgWrap>
              <Category>{category}</Category>
              <SermonTitle>{title}</SermonTitle>
              <Verse>{bibleVerse}</Verse>
            </div>
          ))}
        </div>
      </div>
      <Right />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 2000px;
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

const Title = styled.h2`
  font-size: 40px;
  color: #fff;
  letter-spacing: -2.4px;
`;

const Line = styled.span`
  margin: 20px 0;
  display: block;
  width: 50px;
  height: 1px;
  background-color: #fff;
`;

const BibleText = styled.p`
  font-family: "Noto Serif KR", serif;
  font-size: 20px;
  color: #fff;
  letter-spacing: -2px;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);

  img {
    width: 100%;
    height: 100%;
  }
`;

const Category = styled.h3`
  margin-top: 30px;
  font-size: 20px;
  color: ${COLORS.PRIMARY_LIGHT};
  line-height: 130%;
  font-weight: 500;
  letter-spacing: -2px;
`;

const SermonTitle = styled.h4`
  margin: 10px 0;
  text-overflow: ellipsis;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  font-size: 32px;
  color: #fff;
  line-height: 130%;
  font-weight: 700;
  letter-spacing: -2px;
`;

const Verse = styled.p`
  font-size: 16px;
  color: #cecece;
  line-height: 130%;
  font-weight: 400;
  letter-spacing: -2px;
`;

export default Worship;
