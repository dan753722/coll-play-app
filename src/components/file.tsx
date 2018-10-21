import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { Note } from '@material-ui/icons';
import * as React from 'react';
import {IListItemProps} from './common';
import {fileSizeConverter} from '../utils/utils';

interface IFileProps extends IListItemProps {
    size: number,
    classes: any
}

const styles = (theme: any) => ({
    item: {
        paddingLeft: theme.spacing.unit * 6
    }
});

class File extends React.Component<IFileProps> {

    constructor(props: IFileProps) {
        super(props);
    }

    public render() {
        return <ListItem className={this.props.classes.item}><ListItemIcon><Note/></ListItemIcon><ListItemText>{this.props.name}</ListItemText><span>{fileSizeConverter(this.props.size)}</span></ListItem>;
    }
}

export default withStyles(styles)(File);
