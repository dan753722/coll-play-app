import * as chai from 'chai';
import * as chaiEnzyme from 'chai-enzyme';
import * as React from 'react';
import * as Adapter from 'enzyme-adapter-react-16';
import * as sinon from 'sinon';
import ExplorerContainer from './explorerContainer';
import {shallow, ShallowWrapper, configure, mount} from 'enzyme';
import FolderContainer from './folderContainer';
import { CircularProgress } from '@material-ui/core';

configure({adapter: new Adapter()});
const sandbox = sinon.sandbox.create();

describe('explorer container component', () => {
    chai.use(chaiEnzyme());

    const jsonOK = (body: any) => {  
        const mockResponse = new Response(JSON.stringify(body), {  
          status: 200,
          headers: { 
            'Content-type': 'application/json'
          }
        })
      
        return Promise.resolve(mockResponse); 
      }

    let explorerContainerComponent: ShallowWrapper<any, {}, ExplorerContainer>;

    afterEach(() => {
        sandbox.restore();
    });

    it('should render loading circle when no data is loaded', () => {
        sandbox.stub(window, 'fetch').returns(jsonOK({data: []}));
        explorerContainerComponent = shallow(<ExplorerContainer />);

        chai.expect(explorerContainerComponent.find(CircularProgress)).to.have.lengthOf(1);
    });

    it('should render explorerMetadata', () => {
        sandbox.stub(window, 'fetch').returns(jsonOK({data: []}));
        explorerContainerComponent = shallow(<ExplorerContainer />);

        chai.expect(explorerContainerComponent.find('.explorerMetadata')).to.have.lengthOf(1);
    });

    it('should render one folderContainer', (done) => {
        sandbox.stub(window, 'fetch').returns(jsonOK({data: [{
            "type": "folder",
            "name": "cross-platform",
            "children": []
        }]}));
        const explorerContainerMountedComponent = mount(<ExplorerContainer />);

        setTimeout(() => {
            chai.expect(explorerContainerMountedComponent.update().find(FolderContainer)).to.have.lengthOf(1);
            done();
          }, 1);
    });
});
