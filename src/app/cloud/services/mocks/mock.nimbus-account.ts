import { NimbusAccount } from '../../models/nimbus-account';
import { User } from '../../models/user';
import { CloudAccount } from '../../models/cloud-account';

import { MOCK_LOCAL_ACCOUNT } from './mock.local';
import { MOCK_GDRIVE_ACCOUNT } from './mock.gdrive';

let MOCK_USER: User = new User("user@nimbus.com");

let MOCK_CLOUD_ACCOUNTS: CloudAccount[] = [];
MOCK_CLOUD_ACCOUNTS.push(MOCK_GDRIVE_ACCOUNT);
MOCK_CLOUD_ACCOUNTS.push(MOCK_LOCAL_ACCOUNT);

export const MOCK_NIMBUS_ACCOUNT: NimbusAccount = new NimbusAccount(MOCK_USER, MOCK_CLOUD_ACCOUNTS);
