import React from 'react';
import HeaderNav from "./HeaderNav";
import HeaderBody from "./HeaderBody";

const Header = () => {
  return (
      <header className="space-between">
        <HeaderNav/>
        <HeaderBody/>
      </header>
  );
};

export default Header;
