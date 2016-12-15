import { ContentType } from './content-type';

export class File {
    private _name: string;
    private _path: string;
    private _size: number;
    private _mime: string;
    private _contentType: ContentType;
    private _timestamp: Date;

    public constructor(
        name?: string,
        path?: string,
        size?: number,
        mime?: string,
        contentType?: ContentType,
        timestamp?: Date
    ) {
        this._name = name || '<name>';
        this._path = path || '/';
        this._size = size || 0;
        this._mime = mime || 'application/octet-stream';
        this._contentType = contentType || ContentType.Unknown;
        this._timestamp = timestamp || new Date(0);
    }

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public get path(): string {
		return this._path;
	}

	public set path(value: string) {
		this._path = value;
	}

	public get size(): number {
		return this._size;
	}

	public set size(value: number) {
		this._size = value;
	}

	public get mime(): string {
		return this._mime;
	}

	public set mime(value: string) {
		this._mime = value;
	}

	public get contentType(): ContentType {
		return this._contentType;
	}

	public set contentType(value: ContentType) {
		this._contentType = value;
	}

	public get timestamp(): Date {
		return this._timestamp;
	}

	public set timestamp(value: Date) {
		this._timestamp = value;
	}

}
