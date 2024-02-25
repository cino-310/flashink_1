import React, { useState } from "react";

import { Messagewarning } from '../ui-components';

const WarningMessage = () => {
    const [visible, setVisible] = useState(false)
    const onShow = () => {
        setVisible(true)
    }
    return (
        <Messagewarning overrides={{
            Messagewarning: {
                display: visible ? 'block' : 'none',
                top: '80px',
                onClick: onShow,
            },
            "message-label": {
                overrides: {
                    label: {
                        top: '-24px',
                        children: 'WARNING',
                    }
                }
            },
            "message-body": {
                overrides: {
                    text: {
                        children: 'warning!',
                    }
                }
            },
        }} />
    );
};

export default WarningMessage