import React, { useState } from "react";

import { Actionbuttonlogoutdefault, Actionbuttonlogouthover } from '../ui-components';

import { log } from "../script/Logger";

const ActionButtonLogout = ({ signOut }) => {
  const [isFocused, setIsFocused] = useState(false)
  const onMouseEnter = () => {
    setIsFocused(!isFocused)
  }
  const onClick = () => {
    log('logout clicked')
    signOut()
  }

  return (
    <>
      <Actionbuttonlogoutdefault overrides={{
        Actionbuttonlogoutdefault: {
          display: isFocused ? 'none' : 'block',
          onMouseEnter: onMouseEnter,
        },
        logout: {
          // character
        }
      }} />
      <Actionbuttonlogouthover overrides={{
        Actionbuttonlogouthover: {
          display: isFocused ? 'block' : 'none',
          onMouseLeave: onMouseEnter,
          onClick: onClick,
        },
        logout: {
          // character
        }
      }} />
    </>
  );
};

export default ActionButtonLogout