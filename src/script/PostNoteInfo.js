import { API } from 'aws-amplify';
import { createNoteItem, createNoteText, createToolBar, createInk } from '../graphql/mutations';

import { getNow } from './GetNow';
import { log } from './Logger';

export const postNoteItem = (noteItem) => {
    const now = getNow()
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: createNoteItem,
                variables: {
                    input: {
                        title: noteItem.title,
                        createDate: now.date,
                        createTime: now.time,
                        updateDate: now.date,
                        updateTime: now.time,
                        accountID: noteItem.accountID,
                        noteItemToolBarId: noteItem.toolBarId,
                    }
                }
            }).then((apiData) => {
                const createdNoteItem = apiData.data.createNoteItem;
                log(`noteItem created: ${createdNoteItem.id}`)

                resolve(createdNoteItem)
            });
        } catch (e) {
            const message = 'NoteItem adding failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const postNoteTexts = (noteInfo) => {
    let createdNoteTexts = []
    return new Promise(async (resolve, _) => {
        for (const text of noteInfo.texts) {
            await postNoteText(text, noteInfo.noteId).then((createdNoteText) => {
                if (!createdNoteText) return;

                createdNoteTexts.push(createdNoteText)
            });
        };

        resolve(createdNoteTexts)
    });
};

const postNoteText = async (text, noteId) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: createNoteText,
                variables: {
                    input: {
                        xPosition: text.xPosition,
                        yPosition: text.yPosition,
                        colorCd: text.colorCd,
                        fontSize: text.fontSize,
                        content: text.content,
                        order: text.order,
                        noteitemID: noteId,
                    }
                }
            }).then((apiData) => {
                const createdNoteText = apiData.data.createNoteText
                log(`text created: ${createdNoteText.id}`)

                resolve(createdNoteText)
            });
        } catch (e) {
            const message = 'NoteTexts adding failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const postToolBar = (toolBar) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: createToolBar,
                variables: {
                    input: {
                        isInk1Visible: toolBar.isInk1Visible,
                        isInk2Visible: toolBar.isInk2Visible,
                        isInk3Visible: toolBar.isInk3Visible,
                        currentFontSize: toolBar.currentFontSize,
                        currentColorCd: toolBar.currentColorCd,
                        currentDrawingMode: toolBar.currentDrawingMode,
                    }
                }
            }).then((apiData) => {
                const createdToolBar = apiData.data.createToolBar
                log(`toolbar created: ${createdToolBar.id}`)

                resolve(createdToolBar)
            });
        } catch (e) {
            const message = 'ToolBar adding failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const postInks = (inks, toolId) => {
    let createdInks = []
    return new Promise(async (resolve, _) => {
        for (const ink of inks) {
            await postInk(ink, toolId).then((createdInk) => {
                if (!createdInk) return;
                createdInks.push(createdInk)
            })
        }
        resolve(createdInks)
    });
};

const postInk = (ink, toolId) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: createInk,
                variables: {
                    input: {
                        colorCd: ink.colorCd,
                        order: ink.order,
                        toolbarID: toolId,
                    }
                }
            }).then((apiData) => {
                const ink = apiData.data.createInk
                log(`ink created: ${ink.id}`)

                resolve(ink)
            });
        } catch (e) {
            const message = 'Inks adding failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};