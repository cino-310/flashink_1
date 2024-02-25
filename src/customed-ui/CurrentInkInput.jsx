import React, { useEffect, useState } from "react";

import { Optionfieldink } from '../ui-components';
import InkColorPicker from "./InkColorPicker";

import { log } from "../script/Logger";

const CurrentInkInput = ({ tool, setToolInfo, inks, setInkInfo, texts, setTextInfo }) => {
    const [open, setOpen] = useState(false)
    const [currentColorCd, setCurrentColorCd] = useState('#000000')

    useEffect(() => {
        setCurrentColorCd(tool.currentColorCd)
    }, [tool])

    const onChangeColorCd = (newColorCd) => {
        setCurrentColorCd(newColorCd)
        setCurrentTextInfo(newColorCd)
    }
    const setCurrentTextInfo = (newColorCd) => {
        // set existing text with newColorCd as currentText
        const existingText = texts.filter(text => text.colorCd === newColorCd).at(0)

        if (existingText) {
            setTextInfo(existingText)
            setToolInfo({ ...tool, currentColorCd: newColorCd, currentFontSize: existingText.fontSize })
            log(`currentNoteText changed: text[${existingText.order}] color: ${newColorCd}`)
            return
        }

        const emptyText = texts.filter(text => text.colorCd === '').at(0)

        if (emptyText) {
            const targetInk = inks.filter(ink => ink.order === emptyText.order).at(0)
            setInkInfo({ ...targetInk, colorCd: newColorCd })
            setTextInfo({ ...emptyText, colorCd: newColorCd })
            setToolInfo({ ...tool, currentColorCd: newColorCd, currentFontSize: emptyText.fontSize })
            log(`currentNoteText changed: text[${emptyText.order}] color: ${newColorCd}`)
        } else {
            const currentText = texts.filter(text => text.colorCd === currentColorCd).at(0)

            const targetInk = inks.filter(ink => ink.order === currentText.order).at(0)
            setInkInfo({ ...targetInk, colorCd: newColorCd })
            setTextInfo({ ...currentText, colorCd: newColorCd })
            setToolInfo({ ...tool, currentColorCd: newColorCd, currentFontSize: currentText.fontSize })
            log(`currentNoteText updated: text[${currentText.order}] color: ${newColorCd}`)
        }
    }

    return (
        <>
            <Optionfieldink overrides={{
                Optionfieldink: {
                    top: '-1392px'
                },
                label: {
                    // character
                },
                "color-input": {
                    // font color
                    backgroundColor: currentColorCd,
                    onClick: () => setOpen(true),
                },
            }} />
            <InkColorPicker
                title='Current Ink'
                defaultColor={currentColorCd}
                open={open}
                setOpen={setOpen}
                setColor={onChangeColorCd}
            />
        </>
    );
};

export default CurrentInkInput