import * as React from 'react';
import {IDataItem} from '../components/common';
import FolderContainer from './folderContainer';


const dataSrc = {
    "data": [
        {
            "type": "folder",
            "name": "neural",
            "children": [
                {
                    "type": "folder",
                    "name": "cross-platform",
                    "children": [
                        {
                            "type": "file",
                            "name": "new_taiwan_dollar_awesome.pdf",
                            "size": 22723
                        }
                    ]
                },
                {
                    "type": "folder",
                    "name": "mobile",
                    "children": [
                        {
                            "type": "folder",
                            "name": "virtual",
                            "children": [
                                {
                                    "type": "file",
                                    "name": "rubber_instruction_set_indigo.htm",
                                    "size": 29534
                                },
                                {
                                    "type": "file",
                                    "name": "berkshire.pdf",
                                    "size": 68176
                                }
                            ]
                        },
                        {
                            "type": "folder",
                            "name": "back-end",
                            "children": [
                                {
                                    "type": "folder",
                                    "name": "back-end",
                                    "children": []
                                },
                                {
                                    "type": "file",
                                    "name": "electronics_village_eyeballs.shtml",
                                    "size": 12957
                                },
                                {
                                    "type": "folder",
                                    "name": "bluetooth",
                                    "children": []
                                }
                            ]
                        },
                        {
                            "type": "file",
                            "name": "licensed_metal_hat.m2v",
                            "size": 59036
                        },
                        {
                            "type": "file",
                            "name": "bedfordshire.jpeg",
                            "size": 57609
                        },
                        {
                            "type": "folder",
                            "name": "auxiliary",
                            "children": [
                                {
                                    "type": "file",
                                    "name": "rustic.png",
                                    "size": 26420
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "file",
                    "name": "schemas_russian_ruble.gif",
                    "size": 61539
                },
                {
                    "type": "folder",
                    "name": "haptic",
                    "children": [
                        {
                            "type": "folder",
                            "name": "redundant",
                            "children": []
                        }
                    ]
                },
                {
                    "type": "folder",
                    "name": "solid state",
                    "children": [
                        {
                            "type": "folder",
                            "name": "optical",
                            "children": [
                                {
                                    "type": "folder",
                                    "name": "open-source",
                                    "children": []
                                },
                                {
                                    "type": "file",
                                    "name": "navigate.mpeg",
                                    "size": 62368
                                },
                                {
                                    "type": "folder",
                                    "name": "neural",
                                    "children": []
                                },
                                {
                                    "type": "file",
                                    "name": "http_multi_byte_support.pdf",
                                    "size": 41880
                                },
                                {
                                    "type": "file",
                                    "name": "6th_generation_payment.mp4",
                                    "size": 84665
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "type": "file",
            "name": "metal.mp4",
            "size": 33951
        }
    ]
  };

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
    data: IDataItem[]
}

class ExplorerContainer extends React.Component<{}, IExplorerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: dataSrc.data as IDataItem[]
        };
    }

    public render() {
        return <div className={'root'}>
            {this.state.data.map((data: IDataItem, index) => (<FolderContainer key={index} name={data.name} children={data.children} type={data.type} size={data.size} />))}
        </div> ;
    }
}

export default ExplorerContainer;
