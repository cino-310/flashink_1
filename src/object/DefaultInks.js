const DefaultInk = {
    id: '',
    colorCd: '#fafdff',
    order: '',
    toolbarID: '',
};

export const DefaultInks = [
    // colors for test
    { ...DefaultInk, order: 'FIRST', colorCd: '#000000' },
    { ...DefaultInk, order: 'SECOND' },
    { ...DefaultInk, order: 'THIRD' },
];