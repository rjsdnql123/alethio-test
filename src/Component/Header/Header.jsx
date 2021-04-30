import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">로고</Link>
        </li>
        <li>
          <Link to="/">서비스</Link>
        </li>
        <li>
          <Link to="/">회원가입/마이페이지</Link>
        </li>
        <li>
          <Link to="/">로그인/로그아웃</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
