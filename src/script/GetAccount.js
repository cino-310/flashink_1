
import { API } from 'aws-amplify';
import { listAccounts } from '../graphql/queries';
import { log } from './Logger';

export const fetchAccount = (mailAddress) => {
    return new Promise(async (resolve, _) => {
        // will replace getAcount
        // Account table not ready
        await API.graphql({
            query: listAccounts
        }).then((apiData) => {
            if (apiData?.data?.listAccounts?.items) {
                const fetchedAccountId = apiData.data.listAccounts.items.filter(item => item.mailAddress === mailAddress)?.at(0)?.id

                if (fetchedAccountId) {
                    log(`account fetched: ${fetchedAccountId}`)
                    resolve(fetchedAccountId)
                } else {
                    alert('Account not found')
                }

            } else {
                alert('Account fetching failed')
            }
        });
    });
};