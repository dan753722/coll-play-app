import { FolderOpen, Folder } from '@material-ui/icons';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {shallow, ShallowWrapper} from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { ListItemTypeEnum } from './common';
import FolderInfo from './folderInfo';

configure({ adapter: new Adapter() });

describe('file list item component', () => {
    chai.use(chaiEnzyme());
    let folderInfoComponent: ShallowWrapper<any, {}, FolderInfo>;
    const name = 'name';

    it('should display open folder icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} />);        
        chai.expect(folderInfoComponent.find(FolderOpen)).to.have.lengthOf(1);
    });

    it('should display folder icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={false} itemType={ListItemTypeEnum.Folder} />);        
        chai.expect(folderInfoComponent.find(Folder)).to.have.lengthOf(1);
    });

    it('should display file name', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} />);
        chai.expect(folderInfoComponent.contains(name)).to.equal(true);
    });
});

