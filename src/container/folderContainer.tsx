import { Collapse, List } from '@material-ui/core';
import * as React from 'react';
import { IDataItem, ListItemTypeEnum } from '../components/common';
import File from '../components/file';
import FolderInfo from '../components/folderInfo';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme: any) => ({
    nested: {
        paddingLeft: theme.spacing.unit * 6,
    }
});

interface IFolderContainerState {
    open: boolean
}

interface IFolderContainerProps extends IDataItem {
    classes: any
}

class FolderContainer extends React.Component<IFolderContainerProps, IFolderContainerState> {

    constructor(props: IFolderContainerProps) {
        super(props);
        this.state = {
            open: false
        };

        this.toggleFolderOpen = this.toggleFolderOpen.bind(this);
    }

    public render() {
        if (this.props.type === ListItemTypeEnum.File) {
            return <File itemType={this.props.type} name={this.props.name} size={this.props.size? this.props.size : 0}/>;
        }
        const hasChildren: boolean = this.props.children ? this.props.children.length > 0 : false;
        return (
            <div>
            <FolderInfo open={this.state.open} name={this.props.name} itemType={this.props.type} hasChildren={hasChildren} onClick={this.toggleFolderOpen}/>
            <Collapse in={this.state.open}>
                <List component='div' disablePadding={true} className={this.props.classes.nested}>
                    {
                        this.props.children ? this.props.children.map((data: IDataItem, index) => (<FolderContainerWithStyle key={index} type={data.type} name={data.name} children={data.children} size={data.size} />)) : (null)
                    }
                </List>
            </Collapse>
            </div>
            );
    }

    private toggleFolderOpen() {
        this.setState({open: !this.state.open});
    }
}

const FolderContainerWithStyle = withStyles(styles)(FolderContainer);

export default FolderContainerWithStyle;