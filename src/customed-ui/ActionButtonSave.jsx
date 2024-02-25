import React, { useState } from "react";

import { Actionbuttonsavedefault, Actionbuttonsavehover } from '../ui-components';

import { log } from "../script/Logger";

const ActionButtonSave = ({ onSaveNoteItem }) => {
  const [isFocused, setIsFocused] = useState(false)
  const onMouseEnter = () => {
    setIsFocused(!isFocused)
  }

  // update active NoteItem
  const onClick = () => {
    onSaveNoteItem()
    log('save button clicked')
  }

  return (
    <>
      <Actionbuttonsavedefault overrides={{
        Actionbuttonsavedefault: {
          display: isFocused ? 'none' : 'block',
          top: '-24px',
          left: '40px',
          onMouseEnter: onMouseEnter,
        },
        save: {
          left: '16px',
        }
      }} />
      <Actionbuttonsavehover overrides={{
        Actionbuttonsavehover: {
          display: isFocused ? 'block' : 'none',
          top: '-24px',
          left: '40px',
          onMouseLeave: onMouseEnter,
          onClick: onClick,
        },
        save: {
          left: '16px',
        }
      }} />
    </>
  );
};

export default ActionButtonSave