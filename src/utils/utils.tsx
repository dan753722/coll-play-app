import {ListItemTypeEnum, IDataItem} from '../components/common';

const REFERENCE_TABLE = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB', 'BB']
const BYTE_UNIT = 1000;

export function fileSizeConverter(size: number): string {
    // to do: convert to kb, mb, gb automatically.
    let divisionCounter = 0;
    let convertedSize = size;
    while(Math.floor(convertedSize/BYTE_UNIT) > 0) {
        convertedSize = Math.floor(convertedSize/BYTE_UNIT);
        divisionCounter++;
    }

    
    return `${convertedSize} ${REFERENCE_TABLE[divisionCounter]}`;
}

export function countFiles(data: IDataItem[]): number {
    let counter: number = 0;
    for (const item of data) {
        if (item.type === ListItemTypeEnum.File) {
            counter += 1;
        } else {
            if (item.children) {
                counter += countFiles(item.children);
            }
        }
    }

    return counter;
}
// note, this method could potentially merge into the other one. I can't be bothered to do that now.
// I would rather dup the recursion for now...
export function countFileSize(data: IDataItem[]): number {
    let totalFileSize: number = 0;
    for (const item of data) {
        if (item.type === ListItemTypeEnum.File && item.size) {
            totalFileSize += item.size;
        } else {
            if (item.children) {
                totalFileSize += countFileSize(item.children);
            }
        }
    }

    return totalFileSize;
}
