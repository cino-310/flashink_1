import React, { useEffect, useState } from "react";

import { Optionfieldmode, Optionfieldmodeeraser, Optionfieldmodetext, Optionfieldmodepen } from '../ui-components';

import { log } from "../script/Logger";
import "../css/CurrentDrawingModeInput.css";

/* eslint  react-hooks/exhaustive-deps: 0 */
const CurrentDrawingModeInput = ({ drawingMode }) => {
    const [currentDrawingMode, setCurrentDrawingMode] = useState('TEXT')

    useEffect(() => {
        setCurrentDrawingMode(drawingMode)
    }, [currentDrawingMode])

    const onChangeDrawingMode = () => {
        log('current mode changed:' + currentDrawingMode)
    };

    return (
        <div className='drawingmode-wrapper'
            onClick={onChangeDrawingMode}
        >
            <Optionfieldmode overrides={{
                label: {
                    // character
                },
            }} />
            <Optionfieldmodetext overrides={{
                // text mode
                "mode-input/text": {
                    display: currentDrawingMode === 'TEXT' ? 'block' : 'none',
                    // character
                    left: '74px',
                },
            }}
            />
            <Optionfieldmodepen overrides={{
                // pen mode
                "mode-input/pen": {
                    display: currentDrawingMode === 'PEN' ? 'block' : 'none',
                    // character
                    left: '24px',
                },
            }} />
            <Optionfieldmodeeraser overrides={{
                // eraser mode
                "mode-input/eraser": {
                    display: currentDrawingMode === 'ERASER' ? 'block' : 'none',
                    // character
                    left: '-26px',
                },
            }}
            />
        </div>
    );
};

export default CurrentDrawingModeInput