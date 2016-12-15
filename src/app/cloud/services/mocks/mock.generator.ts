import { File } from '../../models/file';
import { ContentType } from '../../models/content-type';

class MockFileType {
    ext: string;
    mime: string;
}

export class MockGenerator {

    private static generate(
        contentType: ContentType,
        mockfiletypes: MockFileType[],
        max: number,
        rootpath: string,
        prefixName: string
    ): File[] {
        const MAX_DAYS: number = 30;

        let files: File[] = [];

        let now: Date = new Date(Date.now());
        let startDate: Date = new Date(now.setDate(now.getDate() - MAX_DAYS));

        for (let idx = 0; idx < max; idx++) {
            let rnd:number = Math.floor(Math.random() * mockfiletypes.length);
            let size:number = Math.floor(Math.random() * (5*1024*1024));
            let date: Date = new Date(startDate);
            date.setDate(date.getDate() + (Math.floor(Math.random() * MAX_DAYS)));

            files.push(new File(
                prefixName + idx + mockfiletypes[rnd].ext,
                rootpath,
                size,
                mockfiletypes[rnd].mime,
                contentType,
                date
            ));
        }

        return files;
    }

    public static genDocuments(max: number, rootpath: string, prefixName: string): File[] {
        const MOCK_FILE_TYPES: MockFileType[] = [
            { ext: '.doc',  mime: 'application/msword' },
            { ext: '.docx', mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' },
            { ext: '.pdf',  mime: 'application/pdf' },
            { ext: '.txt',  mime: 'text/plain' },
        ];

        return MockGenerator.generate(ContentType.Document, MOCK_FILE_TYPES, max, rootpath, prefixName);
    }

    public static genVideos(max: number, rootpath: string, prefixName: string): File[] {
        const MOCK_FILE_TYPES: MockFileType[] = [
            { ext: '.m4v',  mime: 'video/x-m4v' },
            { ext: '.qt',  mime: 'video/quicktime' },
            { ext: '.avi',  mime: 'video/x-msvideo' },
            { ext: '.mpeg',  mime: 'video/mpeg' },
        ];

        return MockGenerator.generate(ContentType.Video, MOCK_FILE_TYPES, max, rootpath, prefixName);
    }

    public static genAudios(max: number, rootpath: string, prefixName: string): File[] {
        const MOCK_FILE_TYPES: MockFileType[] = [
            { ext: '.wav',  mime: 'audio/x-wav' },
            { ext: '.mp3',  mime: 'audio/mp3' },
            { ext: '.oga',  mime: 'audio/oga' },
        ];

        return MockGenerator.generate(ContentType.Audio, MOCK_FILE_TYPES, max, rootpath, prefixName);
    }

    public static genImages(max: number, rootpath: string, prefixName: string): File[] {
        const MOCK_FILE_TYPES: MockFileType[] = [
            { ext: '.jpg',  mime: 'image/jpeg' },
            { ext: '.png',  mime: 'image/png' },
            { ext: '.gif',  mime: 'image/gif' },
            { ext: '.tif',  mime: 'image/tiff' },
        ];

        return MockGenerator.generate(ContentType.Image, MOCK_FILE_TYPES, max, rootpath, prefixName);
    }

}