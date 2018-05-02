import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import classNames from 'classnames';
import {
  Button,
  Checkbox,
  Form,
  FormGroup,
  SelectItem,
  FileUploaderButton,
  RadioButton,
  RadioButtonGroup,
} from 'carbon-components-react';
import { Search, Select, TextInput, TextArea } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const additionalProps = {
  className: 'some-class',
};

const checkboxEvents = {
  className: 'some-class',
  labelText: 'Checkbox',
};

const fieldsetCheckboxProps = {
  className: 'some-class',
  legendText: 'Checkbox',
};

const fileUploaderEvents = {
  className: 'some-class',
};

const fieldsetFileUploaderProps = {
  className: 'some-class',
  legendText: 'File Uploader',
};

const radioProps = {
  className: 'some-class',
};

const fieldsetRadioProps = {
  className: 'some-class',
  legendText: 'Radio Button',
};

const searchProps = {
  className: 'some-class',
};

const fieldsetSearchProps = {
  className: 'some-class',
  legendText: 'Search',
};

const selectProps = {
  className: 'some-class',
  labelText: 'Select Label',
};

const fieldsetSelectProps = {
  className: 'some-class',
  legendText: 'Select',
};

const textInputClasses = classNames({
  'bx--form-item': true,
  'some-class': true,
});

const TextInputProps = {
  className: textInputClasses,
  id: 'test1',
  labelText: 'Text Input',
};

const fieldsetTextInputProps = {
  className: textInputClasses,
  legendText: 'Text Input',
};

const PasswordProps = {
  className: textInputClasses,
  id: 'test2',
  labelText: 'Password',
};

const InvalidPasswordProps = {
  className: textInputClasses,
  id: 'test3',
  labelText: 'Password (invalid)',
  invalid: true,
  invalidText:
    'Your password must be at least 6 characters as well as contain at least one uppercase, one lowercase, and one number.',
};

const textareaProps = {
  labelText: 'This is a Label',
  className: 'some-class',
  placeholder: 'Hint text here',
  id: 'test4',
  cols: 50,
  rows: 4,
};

const fieldsetTextareaProps = {
  className: 'some-class',
  legendText: 'Text Area',
};

const buttonEvents = {
  className: 'some-class',
};

storiesOf('Components|Form', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => <div className="bx--col-xs-8">{story()}</div>)
  .add(
    'default',
    withInfo(``)(() => (
      <Form {...additionalProps}>
        <FormGroup {...fieldsetCheckboxProps}>
          <Checkbox defaultChecked {...checkboxEvents} id="checkbox-0" />
          <Checkbox {...checkboxEvents} id="checkbox-1" />
          <Checkbox disabled {...checkboxEvents} id="checkbox-2" />
        </FormGroup>

        <FormGroup {...fieldsetFileUploaderProps}>
          <FileUploaderButton {...fileUploaderEvents} id="file-1" labelText="Choose Files..." />
        </FormGroup>

        <FormGroup {...fieldsetRadioProps}>
          <RadioButtonGroup
            onChange={action('onChange')}
            name="radio-button-group"
            defaultSelected="default-selected"
          >
            <RadioButton
              value="standard"
              id="radio-1"
              labelText="Standard Radio Button"
              {...radioProps}
            />
            <RadioButton
              value="default-selected"
              labelText="Default Selected Radio Button"
              id="radio-2"
              {...radioProps}
            />
            <RadioButton
              value="disabled"
              labelText="Disabled Radio Button"
              id="radio-3"
              disabled
              {...radioProps}
            />
          </RadioButtonGroup>
        </FormGroup>

        <FormGroup {...fieldsetSearchProps}>
          <Search
            {...searchProps}
            id="search-1"
            labelText="Search"
            placeHolderText="Search Bluemix Offerings"
          />
        </FormGroup>

        <FormGroup {...fieldsetSelectProps}>
          <Select {...selectProps} id="select-1" defaultValue="placeholder-item">
            <SelectItem disabled hidden value="placeholder-item" text="Pick an option" />
            <SelectItem value="option-1" text="Option 1" />
            <SelectItem value="option-2" text="Option 2" />
            <SelectItem value="option-3" text="Option 3" />
          </Select>
        </FormGroup>

        <FormGroup {...fieldsetTextInputProps}>
          <TextInput {...TextInputProps} />
          <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            {...PasswordProps}
          />
          <TextInput
            type="password"
            required
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
            {...InvalidPasswordProps}
          />
        </FormGroup>
        <FormGroup {...fieldsetTextareaProps}>
          <TextArea {...textareaProps} />
        </FormGroup>
        <div>
          <Button type="submit" className="some-class" {...buttonEvents}>
            Submit
          </Button>
        </div>
      </Form>
    )),
  );
