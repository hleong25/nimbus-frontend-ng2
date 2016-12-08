import { Account } from '../../models/account';
import { CloudType } from '../../models/cloud-type';
import { User } from '../../models/user';
import { File } from '../../models/file';

let MOCK_LOCAL_USER: User = new User("user@localhost.com");
let MOCK_LOCAL_FILES: File[] = [
    new File("test1"),
    new File("test2"),
    new File("test3"),
    new File("test4"),
    new File("test5"),
]

export const MOCK_LOCAL_ACCOUNT: Account = new Account(CloudType.Local, MOCK_LOCAL_USER, MOCK_LOCAL_FILES);
