import React from 'react';
import logo from './logo.svg';
import './App.css';
import FourcutFrame from './components/FourcutFrame/FourcutFrame.components';
import MessageList from './routes/messageList/messageList.components';

function App() {
  return (
    <div className="App">
      <MessageList />
    </div>
  );
}

export default App;
