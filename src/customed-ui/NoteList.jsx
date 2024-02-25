import React from "react";

import { Notelist } from '../ui-components';

const NoteList = () => {
    return (
        <Notelist overrides={{
            Notelist: {
                position: 'relative',
                border: '1px SOLID rgba(0,0,0,0.25)',
            }
        }} />
    );
};

export default NoteList