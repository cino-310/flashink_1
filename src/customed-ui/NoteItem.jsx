import React, { useEffect, useState } from "react";

import { Noteitemdefault, Noteitemhover } from '../ui-components';

import { log } from '../script/Logger';

import { API } from 'aws-amplify';
import { inksByToolbarID, noteTextsByNoteitemID } from "../graphql/queries";

/* eslint  react-hooks/exhaustive-deps: 0 */
const NoteItem = ({
    id,
    title = 'no title',
    updateTime = 'yyyy/mm/dd hh:mm',
    toolId,
    onDelete,
    onFocus,
}) => {
    // will synchronize the title of Titlebar
    const [currentTitle, setCurrentTitle] = useState('')
    const [currentUpdateTime, setCurrentUpdateTime] = useState('')
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        setCurrentTitle(title)
        setCurrentUpdateTime(updateTime)
    }, [updateTime])

    const onMouseEnter = () => {
        setIsFocused(!isFocused)
    }

    const onClick = () => {
        onFocus(id)
        log(`note clicked title: ${title}`)
    }
    const onDeleteClick = async (e) => {
        e.stopPropagation()

        // noteItem does not contain noteTexts' ID
        await API.graphql({ query: noteTextsByNoteitemID, variables: { noteitemID: id } })
            .then(async (fetchedTexts) => {
                const texts = fetchedTexts.data.noteTextsByNoteitemID.items
                const textIds = texts.map(text => [text.id]).reduce((a, b) => a.concat(b))
                await API.graphql({
                    query: inksByToolbarID,
                    variables: {
                        toolbarID: toolId,
                    }
                }).then((fetchedInks) => {
                    const items = fetchedInks.data.inksByToolbarID.items;
                    const inkIds = items.map(item => [item.id]).reduce((a, b) => a.concat(b))
                    onDelete({ noteId: id, textIds: textIds, toolId: toolId, inkIds: inkIds })

                    log('noteItem deleted: ' + id)
                    log(`noteTexts deleted: ${textIds[0]} ${textIds[1]} ${textIds[2]}`)
                    log('toolBar deleted: ' + toolId)
                    log(`inks deleted: ${inkIds[0]} ${inkIds[1]} ${inkIds[2]}`)
                });
            });
    };

    return (
        <>
            <Noteitemdefault overrides={{
                Noteitemdefault: {
                    display: isFocused ? 'none' : 'block',
                    top: '-872px',
                    marginBottom: '1px',
                    position: 'relative',
                    onClick: onClick,
                },
                title: {
                    children: currentTitle,
                },
                "last updated": {
                    children: currentUpdateTime,
                },
                "delete-button/default": {
                    onMouseEnter: onMouseEnter,
                },
            }}
            />
            <Noteitemhover overrides={{
                Noteitemhover: {
                    display: isFocused ? 'block' : 'none',
                    top: '-872px',
                    marginBottom: '1px',
                    position: 'relative',
                    onClick: onClick,
                },
                title: {
                    children: currentTitle,
                },
                "last updated": {
                    children: updateTime,
                },
                "delete-button/hover": {
                    onMouseLeave: onMouseEnter,
                    onClick: (e) => onDeleteClick(e),
                },
            }}
            />
        </>
    );
};

export default NoteItem