import * as React from 'react';

import {Folder, FolderOpen} from '@material-ui/icons';

import {IListItemProps} from './common';

interface IFolderInfoProps extends IListItemProps {
    open: boolean
}

class FolderInfo extends React.Component<IFolderInfoProps> {
    constructor(props: IFolderInfoProps) {
        super(props);
    }

    public render() {
        return <div>{this.props.open ? <FolderOpen/> : <Folder />}<span>{this.props.name}</span></div>;
    }
}

export default FolderInfo;
