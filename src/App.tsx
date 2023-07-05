import React from 'react';
import logo from './logo.svg';
import './App.css';
import FourcutFrame from './components/FourcutFrame/FourcutFrame.components';
import MessageList from './routes/messageList/messageList.components';
import MessageListHeader from './routes/messageListHeader/messageListHeader.components';
import OpenMessage from './routes/openMessage/openMessage.components';

function App() {
  return (
    <div className="App">
      <OpenMessage MessageNumber={2}/>
    </div>
  );
}

export default App;
