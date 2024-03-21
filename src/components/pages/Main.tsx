import api from "apis";
import Notice from "components/templates/main/Notice";
import Slogan from "components/templates/main/Slogan";
import Visual from "components/templates/main/Visual";
import Worship from "components/templates/main/Worship";
import { useEffect } from "react";

const Main = () => {
  // api 테스트
  const getList = async () => {
    const res = await api.post("f569cf2244674b18a20439850b904d14/query");
    console.log("res", res.data.results);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <Visual />
      <Slogan />
      <Worship />
      <Notice />
    </>
  );
};

export default Main;
