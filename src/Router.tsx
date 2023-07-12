import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home.components";
import Main from "./pages/Main/Main.components";
import MessageFeed from "./pages/MessageFeed/MessageFeed.components";
import MessageBox from "./pages/MessageBox/MessageBox.components";
import MessageView from "./components/messageView/messageView.components";
import PostMessage from "./pages/PostMessage/PostMessage.components";
import PhotoBox from "./pages/PhotoBox/PhotoBox.components";
import PhotoView from "./pages/PhotoView/PhotoView.components";
import PostPhoto from "./pages/PostPhoto/PostPhoto.components";
import NotFound from "./pages/NotFound/NotFound.components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/*서비스 소개*/}
        <Route path="/main" element={<Main />} /> {/*콩머신 화면*/}
        <Route path="/message/feed" element={<MessageFeed />} /> {/*쪽지 피드*/}
        <Route path="/message" element={<MessageBox />} />
        {/*쪽지 보관함(포켓볼)*/}
        <Route path="/message/:id" element={<MessageView />} />
        {/*개별 쪽지 조희*/}
        <Route path="/message/post" element={<PostMessage />} /> {/*쪽지 작성*/}
        <Route path="/photo" element={<PhotoBox />} /> {/*네컷 보관함*/}
        <Route path="/photo/:id" element={<PhotoView />} /> {/*개별 네컷 조회*/}
        <Route path="/photo/post" element={<PostPhoto />} /> {/*콩캠네컷 촬영*/}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
