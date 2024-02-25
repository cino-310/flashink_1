import { API } from 'aws-amplify';
import { deleteNoteItem, deleteNoteText, deleteToolBar, deleteInk } from '../graphql/mutations';

import { log } from './Logger';

export const removeNoteItem = (id) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: deleteNoteItem,
                variables: {
                    input: { id: id }
                }
            });

            resolve(id)
        } catch (e) {
            const message = 'NoteItem deleting failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const removeNoteTexts = (ids) => {
    let removedNoteTextIds = []
    return new Promise(async (resolve, _) => {
        for (const id of ids) {
            await removeNoteText(id).then((removedNoteTextId) => {
                if (!removedNoteTextId) return;

                removedNoteTextIds.push(removedNoteTextId)
            });
        }

        resolve(removedNoteTextIds)
    });
};

const removeNoteText = (id) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: deleteNoteText,
                variables: {
                    input: { id: id }
                }
            });

            resolve(id)
        } catch (e) {
            const message = 'NoteText deleting failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const removeToolBar = (id) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: deleteToolBar,
                variables: {
                    input: { id: id }
                }
            });

            resolve(id)
        } catch (e) {
            const message = 'ToolBar deleting failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};

export const removeInks = (ids) => {
    let removedInkIds = []
    return new Promise(async (resolve, _) => {
        for (const id of ids) {
            await removeInk(id).then((removedInkId) => {
                if (!removedInkId) return;

                removedInkIds.push(removedInkId)
            });
        }

        resolve(removedInkIds)
    });
};

const removeInk = (id) => {
    return new Promise(async (resolve, _) => {
        try {
            await API.graphql({
                query: deleteInk,
                variables: {
                    input: { id: id }
                }
            });

            resolve(id)
        } catch (e) {
            const message = 'Ink deleting failed'
            alert(message)

            if (e.message) {
                log(`${message}:\n${e.message}`)
            } else if (e.errors.at(0)) {
                log(`${message}:\n${e.errors.at(0).message}`)
            }
        }
    });
};