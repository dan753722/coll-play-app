import { Collapse, List } from '@material-ui/core';
import * as React from 'react';
import { IDataItem, ListItemTypeEnum } from '../components/common';
import File from '../components/file';
import FolderInfo from '../components/folderInfo';

interface IFolderContainerState {
    open: boolean
}

class FolderContainer extends React.Component<IDataItem, IFolderContainerState> {

    constructor(props: IDataItem) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleFolderOpen = this.toggleFolderOpen.bind(this);
    }

    public render() {
        if (this.props.type === ListItemTypeEnum.File) {
            return <File itemType={this.props.type} name={this.props.name} size={this.props.size? this.props.size : 0}/>
        }
        const hasChildren: boolean = this.props.children && this.props.children.length > 0;
        return (
            <div>
            <FolderInfo open={this.state.open} name={this.props.name} itemType={this.props.type} hasChildren={hasChildren} onClick={this.toggleFolderOpen}/>
            {hasChildren}
            <Collapse in={this.state.open}>
                <List component='div' disablePadding={true}>
                    {this.props.children.map((data: IDataItem, index) => (<FolderContainer key={index} type={data.type} name={data.name} children={data.children} size={data.size} />))}
                </List>
            </Collapse>
            </div>
            );
    }

    private toggleFolderOpen() {
        this.setState({open: !this.state.open});
    }
}
export default FolderContainer;
