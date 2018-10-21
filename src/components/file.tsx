import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Note } from '@material-ui/icons';
import * as React from 'react';
import {IListItemProps} from './common';

interface IFileProps extends IListItemProps {
    size: number
}

class File extends React.Component<IFileProps> {

    constructor(props: IFileProps) {
        super(props);
    }

    public render() {
        return <ListItem><ListItemIcon><Note/></ListItemIcon><ListItemText>{this.props.name}</ListItemText><span>{this.fileSizeConverter(this.props.size)}</span></ListItem>;
    }

    private fileSizeConverter(size: number): string {
        // to do: convert to kb, mb, gb automatically.
        return `${size} B`;
    }
}

export default File;
