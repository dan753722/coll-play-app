import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import { shallow, ShallowWrapper, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import FolderContainer from './folderContainer';
import { IDataItem } from '../components/common';
import FolderInfo from '../components/folderInfo';
import File from '../components/file';

configure({ adapter: new Adapter() });

describe('folder container component', () => {
    chai.use(chaiEnzyme());
    let folderContainerComponent: ShallowWrapper<any, {}, FolderContainer>;
    const dataFolderContainingOneFile: IDataItem = {
        "type": "folder",
        "name": "cross-platform",
        "children": [
            {
                "type": "file",
                "name": "new_taiwan_dollar_awesome.pdf",
                "size": 22723
            }
        ]
    } as IDataItem;

    const dataFile: IDataItem = {
        "type": "file",
        "name": "new_taiwan_dollar_awesome.pdf",
        "size": 22723
    } as IDataItem;

    it('should render folder', () => {
        folderContainerComponent = shallow(<FolderContainer type={dataFolderContainingOneFile.type} name={dataFolderContainingOneFile.name} children={dataFolderContainingOneFile.children} />);

        chai.expect(folderContainerComponent.find(FolderInfo)).to.have.lengthOf(1);
        chai.expect(folderContainerComponent.find(FolderContainer)).to.have.lengthOf(1);
    });

    it('should render one file', () => {
        folderContainerComponent = shallow(<FolderContainer type={dataFile.type} name={dataFile.name} size={dataFile.size} />);
        chai.expect(folderContainerComponent.find(File)).to.have.lengthOf(1);
    });
});

