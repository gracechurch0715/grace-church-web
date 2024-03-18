import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "components/common/Layout";
import Main from "components/pages/Main";
import Notice from "components/pages/Notice";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Main />} />
          <Route path="notice" element={<Notice />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
