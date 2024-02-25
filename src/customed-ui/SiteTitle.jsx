import React from "react";

import { Sitetitle } from '../ui-components';

const SiteTitle = () => {
    return (
        <Sitetitle overrides={{
            Sitetitle: {
                // top: '0px',
                // alignSelf: 'flex-start',
                // position: 'absolute',
                // width: '401px',
            },
            apptitle: {
                // top: '-16%',
            }
        }} />
    );
};

export default SiteTitle