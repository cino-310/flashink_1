import React, { useEffect, useState } from 'react';

import { Titlebar } from '../ui-components';
import ActionButtonSave from './ActionButtonSave';

import '../css/TitleBar.css';

const TitleBar = ({ noteInfo, textsInfo, toolInfo, inkInfo, onSaveNoteItem }) => {
    const [currentTitle, setCurrentTitle] = useState('')

    useEffect(() => {
        setCurrentTitle(noteInfo.title)
    }, [noteInfo.title])

    return (
        <>
            <Titlebar overrides={{
                Titlebar: {
                    position: 'absolute',
                },
                title: {
                    display: 'none',
                }
            }}
            />
            <div className='note-title-wrapper'>
                <input
                    id='note-title'
                    className='note-title'
                    type='text'
                    name='noteTitle'
                    value={currentTitle}
                    onChange={e => {
                        setCurrentTitle(e.target.value)
                    }}
                    style={{ height: '24px' }}
                />
                <ActionButtonSave
                    onSaveNoteItem={() =>
                        onSaveNoteItem({
                            noteItem: {
                                ...noteInfo,
                                title: currentTitle
                            },
                            noteTexts: textsInfo,
                            toolBar: toolInfo,
                            inks: inkInfo,
                        })}
                />
            </div>
        </>
    );
};

export default TitleBar