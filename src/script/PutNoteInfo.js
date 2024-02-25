import { API } from 'aws-amplify';
import { updateNoteItem, updateNoteText, updateToolBar, updateInk } from '../graphql/mutations';

import { getNow } from './GetNow';
import { log } from './Logger';

export const putNoteItem = (noteItem) => {
    const now = getNow()
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: updateNoteItem,
                variables: {
                    input: {
                        id: noteItem.id,
                        title: noteItem.title,
                        createDate: noteItem.createDate,
                        createTime: noteItem.createTime,
                        updateDate: now.date,
                        updateTime: now.time,
                        accountID: noteItem.accountID,
                    }
                }
            }).then((apiData) => {
                const updatedNoteItem = apiData.data.updateNoteItem
                log(`noteItem updated: ${updatedNoteItem.id}`)

                resolve(updatedNoteItem)
            });
        } catch (e) {
            const message = 'NoteItem updating failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const putNoteTexts = (noteTexts) => {
    let updatedNoteTexts = []
    return new Promise(async (resolve, _) => {
        for (const text of noteTexts) {
            await putNoteText(text).then((updatedNoteText) => {
                if (!updatedNoteText) return;
                updatedNoteTexts.push(updatedNoteText)
            })
        }

        resolve(updatedNoteTexts)
    });
};

const putNoteText = (noteText) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: updateNoteText,
                variables: {
                    input: {
                        id: noteText.id,
                        xPosition: noteText.xPosition,
                        yPosition: noteText.yPosition,
                        colorCd: noteText.colorCd,
                        fontSize: noteText.fontSize,
                        content: noteText.content,
                        order: noteText.order,
                        noteitemID: noteText.noteitemID,
                    }
                }
            }).then((apiData) => {
                const updatedNoteText = apiData.data.updateNoteText
                log(`noteTexts updated: ${updatedNoteText.id}`)

                resolve(updatedNoteText)
            });
        } catch (e) {
            const message = 'NoteText updating failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const putToolBar = (toolBar) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: updateToolBar,
                variables: {
                    input: {
                        id: toolBar.id,
                        isInk1Visible: toolBar.isInk1Visible,
                        isInk2Visible: toolBar.isInk2Visible,
                        isInk3Visible: toolBar.isInk3Visible,
                        currentFontSize: toolBar.currentFontSize,
                        currentColorCd: toolBar.currentColorCd,
                        currentDrawingMode: toolBar.currentDrawingMode,
                    }
                }
            }).then((apiData) => {
                const updatedToolBar = apiData.data.updateToolBar
                log(`toolbar updated: ${updatedToolBar.id}`)

                resolve(updatedToolBar)
            });
        } catch (e) {
            const message = 'ToolBar updating failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const putInks = async (inks) => {
    let updatedInks = []
    return new Promise(async (resolve, _) => {
        for (const ink of inks) {
            await putInk(ink).then((updatedInk) => {
                if (!updatedInk) return;

                updatedInks.push(updatedInk)
            });
        }

        resolve(updatedInks)
    });
};

const putInk = async (ink) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: updateInk,
                variables: {
                    input: {
                        id: ink.id,
                        colorCd: ink.colorCd,
                        order: ink.order,
                        toolbarID: ink.toolbarID,
                    }
                }
            }).then((apiData) => {
                const updatedInk = apiData.data.updateInk
                log(`ink updated: ${updatedInk.id}`)

                resolve(updatedInk)
            });
        } catch (e) {
            const message = 'Ink updating failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};