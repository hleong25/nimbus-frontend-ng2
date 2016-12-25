import { CloudAccount } from '../../models/cloud-account';
import { CloudType } from '../../models/cloud-type';
import { User } from '../../models/user';
import { CloudFile } from '../../models/cloud-file';

import { MockGenerator } from './mock.generator';

let MOCK_USER: User = new User("gdrive@google.com");
let MOCK_FILES: CloudFile[] = [];
MOCK_FILES.push(...MockGenerator.genDocuments(5, "/gdrive/text", "text"));
MOCK_FILES.push(...MockGenerator.genVideos(5, "/gdrive/video", "movie"));
MOCK_FILES.push(...MockGenerator.genAudios(5, "/gdrive/audio", "music"));
MOCK_FILES.push(...MockGenerator.genImages(5, "/gdrive/image", "pic"));

export const MOCK_GDRIVE_ACCOUNT: CloudAccount = new CloudAccount(CloudType.GoogleDrive, MOCK_USER, MOCK_FILES);
