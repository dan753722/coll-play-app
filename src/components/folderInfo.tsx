import {ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import {Folder, FolderOpen, ChevronRight, ExpandMore} from '@material-ui/icons';
import * as React from 'react';

import {IListItemProps} from './common';

interface IFolderInfoProps extends IListItemProps {
    open: boolean,
    hasChildren: boolean,
    onClick?: () => void
}

export const ShowMore = ChevronRight;
export const ShowLess = ExpandMore;

class FolderInfo extends React.Component<IFolderInfoProps> {
    constructor(props: IFolderInfoProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.renderArrowSign = this.renderArrowSign.bind(this);
    }

    public render() {
        return <ListItem button={this.props.hasChildren} onClick={this.handleClick}>{this.renderArrowSign()}<ListItemIcon>{this.props.open ? <FolderOpen/> : <Folder />}</ListItemIcon><ListItemText>{this.props.name}</ListItemText></ListItem>;
    }

    private handleClick(e: any) {
        if (this.props.onClick && this.props.hasChildren) {
            this.props.onClick();
        }
    }

    private renderArrowSign() {
        if (this.props.hasChildren) {
            if (this.props.open) {
                return <ShowLess />;
            }
            return <ShowMore />;
        }

        return (null);
    }
}

export default FolderInfo;
