import React from "react";

import { Flashinginks } from '../ui-components';

const FlashingInks = () => {
    return (
        <Flashinginks overrides={{
            Flashinginks: {
                top: '-942px',
                position: 'relative',
            },
            // control on/off of inks by Switches
            firstink: {
                display: 'none',
            },
            secondink: {
                display: 'none',

            },
            thirdink: {
                display: 'none',
            },
            "menu-body": {
                overrides: {
                    title: {
                        // character 
                    },
                },
            },

        }
        } />
    );
};

export default FlashingInks