import React, { useEffect, useState } from 'react';

import { Noteview } from '../ui-components';

import { TextOrder } from '../object/TextOrder';

import "../css/NoteView.css";

/* eslint  react-hooks/exhaustive-deps: 0 */
const NoteView = ({ textsInfo, toolInfo, inkColors, setContent }) => {
    // current: 1 of 3 texts
    const [currentTextId, setCurrentTextId] = useState('')
    const [currentText, setCurrentText] = useState('')

    useEffect(() => {
        const item = textsInfo.filter(text => text.colorCd === toolInfo.currentColorCd).at(0)
        const id = item.id
        setCurrentTextId(id)

        const order = TextOrder[item.order]
        const current = textsInfo[order]
        setCurrentText(current.content)
    }, [textsInfo, toolInfo, inkColors]);

    const isInkOn = (colorCd) => {
        const index = inkColors.indexOf(colorCd)

        switch (index) {
            case 0:
                return toolInfo.isInk1Visible
            case 1:
                return toolInfo.isInk2Visible
            case 2:
                return toolInfo.isInk3Visible
            default:
                // not include currentinkColors
                return true
        }
    };

    const noteCanvasStyle = (text) => {
        return {
            fontSize: text.fontSize,
            color: text.colorCd,
            display: isInkOn(text.colorCd) ? 'block' : 'none',
        };
    };

    return (
        <>
            <Noteview overrides={{
                Noteview: {
                    top: '80px',
                    position: 'absolute',
                },
                "note-canvas": {
                    display: 'none',
                }
            }} />
            <div className='note-canvas-wrapper'>
                {textsInfo.filter(text => text.colorCd !== toolInfo.currentColorCd).map(text => {
                    return (
                        <textarea
                            key={`notetext-${TextOrder[text.order]}`}
                            className='note-canvas'
                            value={text.content}
                            style={noteCanvasStyle(text)}
                            readOnly
                        />)
                })}

                {/* current: top */}
                {/* the others: display in order */}
                <textarea
                    id='current-ink'
                    className='note-canvas'
                    value={currentText}
                    onChange={(e) => {
                        setCurrentText(e.target.value);
                        setContent({ ...textsInfo.filter(text => text.id === currentTextId).at(0), content: e.target.value })
                    }}
                    style={noteCanvasStyle(textsInfo.filter(text => text.colorCd === toolInfo.currentColorCd).at(0))}
                />
            </div>
        </>
    );
};

export default NoteView