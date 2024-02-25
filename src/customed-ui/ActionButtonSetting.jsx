import React, { useState } from "react";

import { Actionbuttonsettingdefault, Actionbuttonsettinghover } from '../ui-components';

import { log } from "../script/Logger";

const ActionButtonSetting = () => {
    const [isFocused, setIsFocused] = useState(false)
    const onMouseEnter = () => {
        setIsFocused(!isFocused)
    }
    const onClick = () => {
        log('setting clicked')
    }

    return (
        <>
            <Actionbuttonsettingdefault overrides={{
                Actionbuttonsettingdefault: {
                    display: isFocused ? 'none' : 'block',
                    left: '8px',
                    onMouseEnter: onMouseEnter,
                },
                setting: {
                    left: '12px',
                }
            }} />
            <Actionbuttonsettinghover overrides={{
                Actionbuttonsettinghover: {
                    display: isFocused ? 'block' : 'none',
                    left: '8px',
                    onMouseLeave: onMouseEnter,
                    onClick: onClick,
                },
                "action-button-back/hover": {
                    left: '8px',
                },
                setting: {
                    left: '12px',
                }
            }} />
        </>
    );
};

export default ActionButtonSetting