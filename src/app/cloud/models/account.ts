import { CloudType } from './cloud-type';
import { File } from './file';
import { User } from './user';

export class Account {
    private _type: CloudType;
    private _user: User;
    private _files: File[];

    public constructor(
        type: CloudType,
        user: User,
        files?: File[]
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

    public get files(): File[] {
        return this._files;
    }

    public addFiles(...files: File[]): number {
        // TODO -- look for dups
        let n = files.length;

        this._files.concat(files);

        return n;
    }

}
