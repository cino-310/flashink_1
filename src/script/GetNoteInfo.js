
import { API } from 'aws-amplify';
import { noteItemsByAccountID, noteTextsByNoteitemID, getToolBar, inksByToolbarID } from "../graphql/queries";

import { InkOrder } from '../object/InkOrder';
import { TextOrder } from '../object/TextOrder';

import { log } from './Logger';

export const fetchNoteItems = (accountId) => {
    return new Promise(async (resolve, _) => {
        await API.graphql({
            query: noteItemsByAccountID,
            variables: {
                accountID: accountId
            }
        }).then((apiData) => {
            if (apiData?.data?.noteItemsByAccountID?.items) {
                const fetchedNoteItems = apiData.data.noteItemsByAccountID.items
                log(`notes fetched - length: ${fetchedNoteItems.length}`)

                resolve(fetchedNoteItems)
            } else {
                alert('NoteItems fetching failed')
            }
        });
    });
};

export const fetchNoteTexts = async (noteItemId) => {
    return new Promise(async (resolve, _) => {
        await API.graphql({
            query: noteTextsByNoteitemID,
            variables: { noteitemID: noteItemId }
        }).then(apiData => {
            if (apiData?.data?.noteTextsByNoteitemID?.items) {
                const fetchedTexts = apiData.data.noteTextsByNoteitemID.items
                log('texts fetched:' +
                    `\ntext1: ${fetchedTexts[TextOrder.FIRST].id}` +
                    `\ntext2: ${fetchedTexts[TextOrder.SECOND].id}` +
                    `\ntext3: ${fetchedTexts[TextOrder.THIRD].id}`)

                resolve(fetchedTexts)
            } else {
                alert('NoteTexts fetching failed')
            }
        });
    });
};

export const fetchToolBar = (toolBarId) => {
    return new Promise(async (resolve, _) => {
        await API.graphql({
            query: getToolBar,
            variables: { id: toolBarId }
        }).then(apiData => {
            if (apiData?.data?.getToolBar) {
                const fetchedToolBar = apiData.data.getToolBar
                log(`toolbar fetched: ${fetchedToolBar.id}`)

                resolve(fetchedToolBar)
            } else {
                alert('ToolBar fetching failed')
            }
        });
    });
};

export const fetchInks = async (toolBarId) => {
    return new Promise(async (resolve, _) => {
        await API.graphql({
            query: inksByToolbarID,
            variables: {
                toolbarID: toolBarId
            }
        }).then(apiData => {
            if (apiData?.data?.inksByToolbarID) {
                const fetchedInks = apiData.data.inksByToolbarID.items
                log(`inks fetched:` +
                    `\nink1: ${fetchedInks[InkOrder.FIRST].id}` +
                    `\nink2: ${fetchedInks[InkOrder.SECOND].id}` +
                    `\nink3: ${fetchedInks[InkOrder.THIRD].id} `)

                resolve(fetchedInks)
            } else {
                alert('Inks fetching failed')
            }
        });
    });
};