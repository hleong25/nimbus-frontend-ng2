import { CloudType } from './cloud-type';
import { CloudFile } from './cloud-file';
import { User } from './user';

export class CloudAccount {
    private _type: CloudType;
    private _user: User;
    private _files: CloudFile[];

    public constructor(
        type: CloudType,
        user: User,
        files?: CloudFile[]
    ) {
        this._type = type;
        this._user = user;

        if (files) {
            this._files = files;
        }
    }

    public get type(): CloudType {
        return this.type;
    }

    public get user(): User {
        return this._user;
    }

    public get files(): CloudFile[] {
        return this._files;
    }

    public addFiles(...files: CloudFile[]): number {
        // TODO -- look for dups
        let n = files.length;

        this._files.concat(files);

        return n;
    }

}
