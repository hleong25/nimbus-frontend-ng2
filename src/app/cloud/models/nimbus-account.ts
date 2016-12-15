import { CloudAccount } from './cloud-account';
import { User } from './user';

export class NimbusAccount {
    private _user: User;
    private _cloudAccounts: CloudAccount[];

	public constructor(
        user: User,
        cloudAccounts?: CloudAccount[]
    ) {
		this._user = user;

        if (cloudAccounts) {
            this._cloudAccounts = cloudAccounts;
        }
	}

	public get user(): User {
		return this._user;
	}

	public get cloudAccounts(): CloudAccount[] {
		return this._cloudAccounts;
	}

	public set cloudAccounts(value: CloudAccount[]) {
		this._cloudAccounts = value;
	}

    public addCloudAccounts(...cloudAccounts: CloudAccount[]): number {
        // TODO -- look for dups
        let n = cloudAccounts.length;

        this.cloudAccounts.concat(cloudAccounts);

        return n;
    }

}
