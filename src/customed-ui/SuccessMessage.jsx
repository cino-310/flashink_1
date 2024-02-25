import React, { useState } from "react";

import { Messagesuccess } from '../ui-components';

const SuccessMessage = () => {
    const [visible, setVisible] = useState(false)
    const onShow = () => {
        setVisible(true)
    }
    return (
        <Messagesuccess overrides={{
            Messagesuccess: {
                display: visible ? 'block' : 'none',
                top: '80px',
                onClick: onShow,
            },
            "message-label": {
                overrides: {
                    label: {
                        top: '-24px',
                        children: 'SUCCESS',
                    }
                }
            },
            "message-body": {
                overrides: {
                    text: {
                        children: 'success!',
                    }
                }
            },
        }} />
    );
};

export default SuccessMessage