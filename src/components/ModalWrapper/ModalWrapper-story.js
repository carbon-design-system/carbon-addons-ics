import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { ModalWrapper } from '../../index';
import {
  SelectItem,
  RadioButtonGroup,
  RadioButton,
  TextInput,
  Select,
} from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|ModalWrapper', module)
  .addDecorator(withReadme(readme))
  .add(
    'transactional dialog',
    withInfo(
      `
      Transactional modals are used to validate user decisions or to gain secondary confirmation from the user.
    `
    )(() => (
      <ModalWrapper
        id="transactional-dialog"
        buttonTriggerText="Transactional Dialog"
        modalHeading="Transactional Dialog"
        primaryButtonText="Save"
        secondaryButtonText="Cancel"
        onRequestClose={action('onRequestClose')}
        handleSubmit={action('onSubmit')}>
        <p className="bx--modal-content__text">
          Transactional modals are used to validate user decisions os to gain
          secondary confirmation from the user. Typically, the modal requests
          either a 'yes' or 'no' response.
        </p>
        <p className="bx--modal-content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus fermentum risus, sit amet fringilla nunc pellentesque quis.
          Duis quis odio ultrices, cursus lacus ac, posuere felis. Donec
          dignissim libero in augue mattis, a molestie metus vestibulum. Aliquam
          placerat felis ultrices lorem condimentum, nec ullamcorper felis
          porttitor. Nunc at maximus purus. Curabitur sodales eros sit amet
          dolor bibendum gravida. Sed efficitur, arcu imperdiet vestibulum
          ultrices, risus diam ullamcorper arcu, sit amet gravida metus ligula
          quis metus.
        </p>
        <p className="bx--modal-content__text">
          Donec id sapien ex. Duis aliquam tortor nec mollis pulvinar. Fusce sit
          amet libero blandit, sollicitudin est in, tempor lectus. Donec
          convallis condimentum mi eu ultrices. Sed risus ipsum, fermentum ut
          fringilla sed, rutrum eget purus. Morbi molestie dui nisi, consectetur
          posuere ante viverra non. Integer cursus quis risus ut cursus. Aenean
          ut dictum nibh. Cras at leo interdum, ornare elit non, posuere enim.
          Mauris hendrerit nunc eget malesuada congue. Nam velit leo, convallis
          et lobortis ac, semper ut urna. Etiam nec neque urna. Donec sagittis
          eros urna, at aliquet erat consectetur ac. Proin faucibus sed erat
          tempus accumsan. Nam pretium malesuada commodo. Mauris mollis
          elementum neque, sed ornare urna vestibulum non. Curabitur elementum
          in ex in commodo. Donec laoreet consequat sapien. Sed eget tortor
          aliquam, facilisis est vitae, commodo magna. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Mauris a lobortis ex. Nulla mollis
          tincidunt sodales.
        </p>
      </ModalWrapper>
    ))
  )
  .add(
    'passive dialog',
    withInfo(
      `
      Passive modal notifications should only appear if there is an action the user needs to address immediately.
      Passive modal notifications are persistent on screen.
    `
    )(() => (
      <ModalWrapper
        id="passive-dialog"
        buttonTriggerText="Passive Dialog"
        modalText="This is a passive dialog"
        modalHeading="Passive Dialog"
        passiveModal
        onRequestClose={action('onRequestClose')}>
        <p className="bx--modal-content__text">
          Passive modal notifications should only appear if there is an action
          the user needs to address immediately. Passive modal notifications are
          persistent on screen.
        </p>
      </ModalWrapper>
    ))
  )
  .add(
    'input dialog',
    withInfo(
      `
      Input modals are used to follow up with previous user input. These modals should include areas
      for input that the user can interact with, such as forms, dropdowns, selectors, and links. The example
      below shows a Modal Wrapper component with various input components.
    `
    )(() => (
      <ModalWrapper
        id="input-dialog"
        buttonTriggerText="Input Dialog"
        modalHeading="Dialog with Inputs"
        handleSubmit={action('onSubmit')}>
        <TextInput
          id="test2"
          placeholder="Hint text here"
          label="Text Input:"
        />
        <br />
        <Select id="select-1" labelText="Select">
          <SelectItem
            disabled
            hidden
            value="placeholder-item"
            text="Pick an option"
          />
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
          <SelectItem value="option-3" text="Option 3" />
        </Select>
        <br />
        <RadioButtonGroup
          name="radio-button-group"
          defaultSelected="default-selected">
          <RadioButton
            value="standard"
            id="radio-1"
            labelText="Standard Radio Button"
            className="some-class"
          />
          <RadioButton
            value="default-selected"
            labelText="Default Selected Radio Button"
            id="radio-2"
            className="some-class"
          />
          <RadioButton
            value="disabled"
            labelText="Disabled Radio Button"
            id="radio-3"
            className="some-class"
            disabled
          />
        </RadioButtonGroup>
      </ModalWrapper>
    ))
  );
