import {ListItemTypeEnum, IDataItem} from '../components/common';

export function fileSizeConverter(size: number): string {
    // to do: convert to kb, mb, gb automatically.
    return `${size} B`;
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
