import React from 'react';
import logo from './logo.svg';
import './App.css';
import FourcutFrame from './components/FourcutFrame/FourcutFrame.components';
import MessageList from './routes/messageList/messageList.components';
import MessageListHeader from './routes/messageListHeader/messageListHeader.components';

function App() {
  return (
    <div className="App">
      <MessageListHeader number="15"/>
      <MessageList />
    </div>
  );
}

export default App;
