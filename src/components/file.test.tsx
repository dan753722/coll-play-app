import { Note } from '@material-ui/icons';
import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import {shallow, ShallowWrapper} from 'enzyme';
import { configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import { ListItemTypeEnum } from './common';
import File from './file';

configure({ adapter: new Adapter() });

describe('file list item component', () => {
    chai.use(chaiEnzyme());
    let fileComponent: ShallowWrapper<any, {}, any>;
    const name = 'name';
    const size = 100;

    beforeEach(() => {
        fileComponent = shallow(<File name={name} size={size} itemType={ListItemTypeEnum.File} />);
    })

    it('should display file icon', () => {        
        chai.expect(fileComponent.dive().find(Note)).to.have.lengthOf(1);
    });

    it('should display file name', () => {
        chai.expect(fileComponent.dive().contains(name)).to.equal(true);
    });

    it('should display file size', () => {
        chai.expect(fileComponent.dive().contains(`100 B`)).to.equal(true);
    });
});

