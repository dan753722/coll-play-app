export enum ListItemTypeEnum {
    Folder='folder',
    File='file'
}

export interface IListItemProps {
    itemType: ListItemTypeEnum,
    name: string
}

export interface IDataItem {
    type: ListItemTypeEnum,
    name: string,
    children?: IDataItem[],
    size?: number
}
