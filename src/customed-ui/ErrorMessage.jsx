import React, { useState } from "react";

import { Messageerror } from '../ui-components';

const ErrorMessage = () => {
    const [visible, setVisible] = useState(false)
    const onShow = () => {
        setVisible(true)
    }
    return (
        <Messageerror overrides={{
            Messageerror: {
                display: visible ? 'block' : 'none',
                top: '80px',
                onClick: onShow,
            },
            "message-label": {
                overrides: {
                    label: {
                        top: '-24px',
                    }
                }
            },
            "message-body": {
                overrides: {
                    text: {
                        children: 'error!',
                    }
                }
            },
        }} />
    );
};

export default ErrorMessage