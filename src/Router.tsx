import React from "react";
import { useMediaQuery } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/common/Header/Header.components";
import Home from "./pages/Home/home.components";
import Main from "./pages/Main/Main.components";
import MessageFeed from "./pages/MessageFeed/MessageFeed.components";
import MessageBox from "./pages/MessageBox/MessageBox.components";
import MessageView from "./pages/MessageView/MessageView.components";
import PostMessage from "./pages/PostMessage/PostMessage.components";
import PhotoBox from "./pages/PhotoBox/PhotoBox.components";
import PostPhoto from "./pages/PostPhoto/PostPhoto.components";
import NotFound from "./pages/NotFound/NotFound.components";
import WebCongcamMachine from "./pages/WebCongcamMachine/WebCongcamMachine.components";
import WebCongcamFourcut from "./pages/WebCongcamFourcut/WebCongcamFourcut.components";
import WebCongcamFeed from "./pages/WebCongcamFeed/WebCongcamFeed.components";
import SafariAlert from "./pages/SafariAlert/SafariAlert.components";

declare global {
  interface Window {
    chrome: any;
  }
}

const Router = () => {
  const UA = navigator.userAgent.toLowerCase();
  const isChrome = UA.includes("chrome");

  const match1024 = useMediaQuery("(min-width:1024px)");
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {!isChrome ? (
          <Route path="/*" element={<SafariAlert />} />
        ) : match1024 ? (
          <>
            <Route path="/" element={<Home />} /> {/*서비스 소개*/}
            <Route path="/:id" element={<WebCongcamMachine />} />{" "}
            {/*콩캠머신 및 메세지 메인 화면*/}
            <Route path="/message/feed/:id" element={<WebCongcamFeed />} />{" "}
            {/*쪽지 피드*/}
            <Route
              path="/message/:messageid/:userid"
              element={<MessageView />}
            />
            <Route path="/message/post/:id" element={<PostMessage />} />
            <Route path="/photo/:id" element={<WebCongcamFourcut />} />{" "}
            {/*콩캠네컷 메인화면*/}
            <Route path="/photo/post/:id" element={<PostPhoto />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Home />} /> {/*서비스 소개*/}
            <Route path="/:id" element={<Main />} /> {/*콩머신 화면*/}
            <Route path="/message/feed/:id" element={<MessageFeed />} />{" "}
            {/*쪽지 피드*/}
            <Route path="/message/:id" element={<MessageBox />} />
            {/*쪽지 보관함(포켓볼)*/}
            <Route
              path="/message/:messageid/:userid"
              element={<MessageView />}
            />
            {/*개별 쪽지 조희*/}
            <Route path="/message/post/:id" element={<PostMessage />} />{" "}
            {/*쪽지 작성*/}
            <Route path="/photo/:id" element={<PhotoBox />} /> {/*네컷 보관함*/}
            <Route path="/photo/post/:id" element={<PostPhoto />} />{" "}
            {/*콩캠네컷 작성*/}
            <Route path="/*" element={<NotFound />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
