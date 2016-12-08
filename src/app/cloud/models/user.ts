export class User {
    private _email: string;

	public constructor(email?: string) {
        this._email = email || '';
	}

    public get email(): string {
        return this._email;
    }

    public set email(email: string) {
        this._email = email;
    }
}
