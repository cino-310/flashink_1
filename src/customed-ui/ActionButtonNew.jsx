import React, { useState } from "react";

import { Actionbuttonnewdefault, Actionbuttonnewhover } from '../ui-components';

import { log } from '../script/Logger';

const ActionButtonNew = ({ onCreate }) => {
  const [isFocused, setIsFocused] = useState(false);
  const onMouseEnter = () => {
    setIsFocused(!isFocused)
  };
  const onClick = () => {
    onCreate()
    log('new note created')
  };

  return (
    <>
      <Actionbuttonnewdefault overrides={{
        Actionbuttonnewdefault: {
          display: isFocused ? 'none' : 'block',
          left: '144px',
          onMouseEnter: onMouseEnter,
        },
        new: {
          // character
        }
      }} />
      <Actionbuttonnewhover overrides={{
        Actionbuttonnewhover: {
          display: isFocused ? 'block' : 'none',
          left: '144px',
          onMouseLeave: onMouseEnter,
          onClick: onClick,
        },
        new: {
          // character
        }
      }} />
    </>
  );
};

export default ActionButtonNew