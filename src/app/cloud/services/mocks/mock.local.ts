import { CloudAccount } from '../../models/cloud-account';
import { CloudType } from '../../models/cloud-type';
import { User } from '../../models/user';
import { CloudFile } from '../../models/cloud-file';

import { MockGenerator } from './mock.generator';

let MOCK_USER: User = new User("user@localhost.com");

let MOCK_FILES: CloudFile[] = [];
MOCK_FILES.push(...MockGenerator.genDocuments(5, "/tmp/text", "text"));
MOCK_FILES.push(...MockGenerator.genVideos(5, "/tmp/video", "movie"));
MOCK_FILES.push(...MockGenerator.genAudios(5, "/tmp/audio", "music"));
MOCK_FILES.push(...MockGenerator.genImages(5, "/tmp/image", "pic"));

export const MOCK_LOCAL_ACCOUNT: CloudAccount = new CloudAccount(CloudType.Local, MOCK_USER, MOCK_FILES);
