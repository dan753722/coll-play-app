import * as React from 'react';
import {IDataItem} from '../components/common';
import FolderContainer from './folderContainer';
import {Divider, CircularProgress} from '@material-ui/core';
import {fileSizeConverter, countFiles, countFileSize} from '../utils/utils';

//   const styles = theme => ({
//     root: {
//       width: '100%',
//       maxWidth: 360,
//       backgroundColor: theme.palette.background.paper,
//     },
//     nested: {
//       paddingLeft: theme.spacing.unit * 4,
//     },
//   });
interface IExplorerState {
    data: IDataItem[],
    totalNumOfFiles: number,
    totalFileSize: number,
    error: string
}

class ExplorerContainer extends React.Component<{}, IExplorerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [],
            totalNumOfFiles: 0,
            totalFileSize: 0,
            error: ''
        };
    }

    public render() {

        if (this.state.error !== '') {
            return <div>{this.state.error}</div>;
        }

        return <div className={'root'}>
            <div className='explorerMain'>
                {this.state.data.length > 0 ? this.state.data.map((data: IDataItem, index) => (<FolderContainer key={index} name={data.name} children={data.children} type={data.type} size={data.size} />)): <CircularProgress />}
            </div>
            <Divider light={true} />
            <div className='explorerMetadata'>
                <div><span>Total Files: </span>{this.state.totalNumOfFiles}</div>
                <div><span>Total Filesize: </span>{fileSizeConverter(this.state.totalFileSize)}</div>
            </div>
        </div> ;
    }

    public async componentDidMount() {
        const response: Response = await fetch('https://chal-locdrmwqia.now.sh/', {
            method: 'get',
            headers: {'content-type': 'application/json'}
        });

        if (!response.ok) {
            this.setState({error: 'something is wrong'});
            return;
        }

        const data: IDataItem[] = (await response.json()).data as IDataItem[];
        const totalNumOfFiles: number = countFiles(data);
        const totalFileSize: number = countFileSize(data);
        this.setState({data, totalFileSize, totalNumOfFiles, error: ''});
    }
}

export default ExplorerContainer;
