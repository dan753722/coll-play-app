import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import { Note } from '@material-ui/icons';
import * as React from 'react';
import {IListItemProps} from './common';
import {fileSizeConverter} from '../utils/utils';

interface IFileProps extends IListItemProps {
    size: number
}

class File extends React.Component<IFileProps> {

    constructor(props: IFileProps) {
        super(props);
    }

    public render() {
        return <ListItem><ListItemIcon><Note/></ListItemIcon><ListItemText>{this.props.name}</ListItemText><span>{fileSizeConverter(this.props.size)}</span></ListItem>;
    }
}

export default File;
