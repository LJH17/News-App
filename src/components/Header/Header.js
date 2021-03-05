import React from 'react';

import { ReactComponent as BTLogo } from '../../assets/bt-logo.svg';

const Header = () => (
  <header className="py-3 bg-primary">
    <div className="flex flex-wrap justify-center">
      <BTLogo className="text-white fill-current" height="75px" />
      <h1 className="px-3 mt-3 md:mt-0 md:ml-3 text-white font-bold md:text-3xl text-center self-center">
        BT React Code Test - by Luke Hooker - 04/03/2020
      </h1>
    </div>
  </header>
);

export default Header;
