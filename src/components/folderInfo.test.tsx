import { Folder, FolderOpen } from '@material-ui/icons';
import {ListItem} from '@material-ui/core';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import * as sinon from 'sinon';
import {shallow, ShallowWrapper} from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { ListItemTypeEnum } from './common';
import FolderInfo, {ShowMore, ShowLess} from './folderInfo';

configure({ adapter: new Adapter() });

describe('file list item component', () => {
    chai.use(chaiEnzyme());
    let folderInfoComponent: ShallowWrapper<any, {}, FolderInfo>;
    const name = 'name';

    it('should display open folder icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} hasChildren={false}/>);        
        chai.expect(folderInfoComponent.find(FolderOpen)).to.have.lengthOf(1);
    });

    it('should display folder icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={false} itemType={ListItemTypeEnum.Folder} hasChildren={false}/>);        
        chai.expect(folderInfoComponent.find(Folder)).to.have.lengthOf(1);
    });

    it('should display file name', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} hasChildren={false}/>);
        chai.expect(folderInfoComponent.contains(name)).to.equal(true);
    });

    it('should display folder icon and show more icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={false} itemType={ListItemTypeEnum.Folder} hasChildren={true}/>);        
        chai.expect(folderInfoComponent.find(Folder)).to.have.lengthOf(1);
        chai.expect(folderInfoComponent.find(ShowMore)).to.have.lengthOf(1);
    });

    it('should display open folder icon and show less icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} hasChildren={true}/>);        
        chai.expect(folderInfoComponent.find(FolderOpen)).to.have.lengthOf(1);
        chai.expect(folderInfoComponent.find(ShowLess)).to.have.lengthOf(1);
    });

    it('should display no show less/more icon', () => {
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} hasChildren={false}/>);
        chai.expect(folderInfoComponent.find(ShowMore)).to.have.lengthOf(0);
        chai.expect(folderInfoComponent.find(ShowLess)).to.have.lengthOf(0);
    });

    it('should fire click event', () => {
        const clickSpy = sinon.spy();
        folderInfoComponent = shallow(<FolderInfo name={name} open={true} itemType={ListItemTypeEnum.Folder} hasChildren={true} onClick={clickSpy} />);
        folderInfoComponent.find(ListItem).simulate('click');
        chai.expect(clickSpy).to.have.property('callCount', 1);
    });

    it('should not fire click event', () => {
        const unFiredClickSpy = sinon.spy();
        folderInfoComponent = shallow(<FolderInfo name={name} open={false} itemType={ListItemTypeEnum.Folder} hasChildren={false} onClick={unFiredClickSpy} />);
        folderInfoComponent.find(ListItem).simulate('click');
        chai.expect(unFiredClickSpy).to.have.property('callCount', 0);
    });
});

