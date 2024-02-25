const DefaultNoteText = {
    id: '',
    xPosition: 0,
    yPosition: 0,
    fontSize: 16,
    colorCd: '',
    content: '',
    order: '',
    noteitemID: '',
};

export const DefaultNoteTexts = [
    // 3 colors at most
    // use id to tell currentNoteText from the others
    { ...DefaultNoteText, id: '0', order: 'FIRST', colorCd: '#000000' },
    { ...DefaultNoteText, id: '1', order: 'SECOND' },
    { ...DefaultNoteText, id: '2', order: 'THIRD' },
];
