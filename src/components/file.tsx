import * as React from 'react';

import { Note } from '@material-ui/icons';

// interface IDataItem {
//     type: ListItemTypeEnum,
//     name: string,
//     children: IDataItem[]
// }

export enum ListItemTypeEnum {
    Folder='folder',
    File='file'
}

interface IListItemProps {
    ItemType: ListItemTypeEnum,
    name: string
}

interface IFileProps extends IListItemProps {
    size: number
}

class File extends React.Component<IFileProps> {

    constructor(props: IFileProps) {
        super(props);
    }

    public render() {
        return <div><Note/><span>{this.props.name}</span><span>{this.fileSizeConverter(this.props.size)}</span></div>;
    }

    private fileSizeConverter(size: number): string {
        // to do: convert to kb, mb, gb automatically.
        return `${size} B`;
    }
}

export default File;
