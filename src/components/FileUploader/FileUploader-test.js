import React from 'react';
import FileUploader from '../FileUploader';
import { Filename } from 'carbon-components-react';
import { mount } from 'enzyme';

describe('FileUploader', () => {
  const fileUploader = <FileUploader className="extra-class" />;
  const mountWrapper = mount(fileUploader);

  describe('Renders as expected with defaults', () => {
    it('should render with default className', () => {
      expect(mountWrapper.children().hasClass('bx--form-item')).toEqual(true);
    });

    it('should render with given className', () => {
      expect(mountWrapper.hasClass('extra-class')).toEqual(true);
    });

    it('renders with FileUploaderButton with disableLabelChanges set to true', () => {
      expect(mountWrapper.find('FileUploaderButton').props().disableLabelChanges).toEqual(true);
    });
    it('renders input with hidden prop', () => {
      expect(mountWrapper.find('input').props().className).toEqual('bx--visually-hidden');
    });
    it('renders with empty div.bx--file-container by default', () => {
      expect(mountWrapper.find('div.bx--file-container').text()).toEqual('');
    });
    it('clears all uploaded files when the clearFiles method is called', () => {
      const mountUploadedWrapper = mount(fileUploader);
      mountUploadedWrapper.setState({
        filenames: ['examplefile.jpg'],
        filenameStatus: 'complete',
      });

      // Test to make sure that the Filename is rendered
      expect(mountUploadedWrapper.find(Filename)).toHaveLength(1);

      // Test to make sure it was properly removed
      mountUploadedWrapper.instance().clearFiles();
      expect(mountUploadedWrapper.update().find(Filename)).toHaveLength(0);
    });
  });
});
