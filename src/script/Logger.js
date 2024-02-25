import { ConsoleLogger } from '@aws-amplify/core';
import { Amplify, AWSCloudWatchProvider } from '@aws-amplify/core';

import { getNow } from './GetNow';

export const logger = new ConsoleLogger('', 'DEBUG');

Amplify.register(logger)
logger.addPluggable(new AWSCloudWatchProvider({
    logGroupName: `/{LOG_NAME}/{APP_NAMAE}/${process.env.NODE_ENV}_LOGS`,
    logStreamName: 'developer',
    region: '{REGION}'
}));

export const log = (text) => {
    const now = getNow()
    logger.debug(`${now.date} ${now.time}: ${text}`)
};

