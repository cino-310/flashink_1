import React, { useEffect, useState } from "react";

import { Optionfieldsize } from '../ui-components';

import { log } from "../script/Logger";
import '../css/CurrentSizeInput.css';

const CurrentSizeInput = ({ tool, setToolInfo, currentText, setTextInfo }) => {
    const [currentFontSize, setCurrentFontSize] = useState(14)

    useEffect(() => {
        setCurrentFontSize(tool.currentFontSize)
    }, [tool])

    const onChangeFontSize = (value) => {
        setToolInfo({ ...tool, currentFontSize: value })
        setTextInfo({ ...currentText, fontSize: value })
        log(`current fontsize changed: ${value}`)
    }

    return (
        <>
            <Optionfieldsize overrides={{
                Optionfieldsize: {
                    top: '-1384px'
                },
                label: {
                    // character
                },
                "font-input": {
                    display: 'none',
                },
            }} />
            <div className='current-size-wrapper'>
                <input
                    id='current-fontsize'
                    className='current-size-input'
                    type='text'
                    name='currentFontSize'
                    value={currentFontSize}
                    onChange={e => {
                        onChangeFontSize(Number(e.target.value))
                    }}
                />
            </div>
        </>
    );
};

export default CurrentSizeInput