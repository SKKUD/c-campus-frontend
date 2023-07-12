import React from "react";
import FourcutFrame from "./components/FourcutFrame/FourcutFrame.components";
import MessageList from "./routes/messageList/messageList.components";
import MessageListHeader from "./routes/messageListHeader/messageListHeader.components";
import OpenMessage from "./routes/openMessage/openMessage.components";
import MessageView from "./routes/messageView/messageView.components";
import Header from "./components/common/Header.components";

function App() {
  return (
    <div className="App">
      <Header />
      <MessageList />
    </div>
  );
}

export default App;
