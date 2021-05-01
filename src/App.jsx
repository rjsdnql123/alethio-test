import logo from './logo.svg';
import './App.css';
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import MyPage from './Component/MyPage/MyPage';
import LoginView from './feature/loginForm/loginForm';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="App-header">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={LoginView} />
        <Route path="/mypage" component={MyPage} />
      </div>
    </div>
  );
}

export default App;
