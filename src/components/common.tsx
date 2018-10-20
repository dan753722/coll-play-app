export enum ListItemTypeEnum {
    Folder='folder',
    File='file'
}

export interface IListItemProps {
    itemType: ListItemTypeEnum,
    name: string
}
