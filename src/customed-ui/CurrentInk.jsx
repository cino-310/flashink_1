import React from "react";

import { Currentink } from '../ui-components';

const CurrentInk = () => {
    return (
        <Currentink overrides={{
            Currentink: {
                top: '-944px'
            },
            "option-field/ink": {
                display: 'none',
            },
            "option-field/size": {
                display: 'none',
            },
            "option-field/mode": {
                display: 'none',
            },
            "option-field/mode/text": {
                // text mode
                display: 'none',
            },
            "option-field/mode/pen": {
                // pen mode
                display: 'none',
            },
            "option-field/mode/eraser": {
                // eraser mode
                display: 'none',
            },
            "menu-body": {
                overrides: {
                    title: {
                        children: 'Current Ink',
                    }
                },
            },
        }} />
    );
};

export default CurrentInk