import { ContentType as CloudContentType } from '../../../../cloud/models/content-type';
import { ContentType } from '../models/content-type';

export const CONTENT_TYPES: ContentType[] = [
    {type: CloudContentType.Document, title: 'documents', icon: 'fa-file-text-o'},
    {type: CloudContentType.Video, title: 'videos', icon: 'fa-film'},
    {type: CloudContentType.Audio, title: 'music', icon: 'fa-music'},
    {type: CloudContentType.Image, title: 'pictures', icon: 'fa-camera'},
];
