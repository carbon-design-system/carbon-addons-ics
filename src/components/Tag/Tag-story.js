import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { Tag, TagWrapper } from '../../index';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

class TagUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      action: 'emoji',
      count: 14,
    };
  }

  tagClick = () => {
    this.setState({
      action: 'success',
      count: 15,
    });
  };

  render() {
    return (
      <TagWrapper light aria-label="Tags">
        <Tag
          action={this.state.action}
          actionFunction={this.tagClick}
          actionDescription="Add a point">
          Offering Managment &middot; {this.state.count}
        </Tag>
      </TagWrapper>
    );
  }
}

const actionTagProps = {
  className: 'some-class',
  onClick: action('onClick'),
  onBlur: action('onBlur'),
  onFocus: action('onFocus'),
  onKeyUp: action('onKeyUp'),
  onKeyDown: action('onKeyDown'),
  actionDescription: 'Enter an icon description',
};

storiesOf('Components|Tag', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(
      `
        This example below shows how the Tag
        component can be used. Notice dark is used in this case since it's on a
        light background. To use multiple tags use the TagWrapper component.
      `
    )(() => (
      <TagWrapper light aria-label="Tags">
        <Tag className="some-class">Offering Managment &middot; 72</Tag>
        <Tag className="some-class">Development &middot; 63</Tag>
        <Tag className="some-class">RTP &middot; 51</Tag>
        <Tag className="some-class">Littleton &middot; 33</Tag>
        <Tag className="some-class">Dublin &middot; 12</Tag>
      </TagWrapper>
    ))
  )
  .add(
    'remove',
    withInfo(
      `
        This shows how the Tag component can be used with a remove option.
      `
    )(() => (
      <TagWrapper light aria-label="Tags">
        <Tag remove className="some-class">
          Offering Managment
        </Tag>
        <Tag remove className="some-class">
          Development
        </Tag>
        <Tag remove className="some-class">
          RTP
        </Tag>
        <Tag remove className="some-class">
          Littleton
        </Tag>
        <Tag remove className="some-class">
          Dublin
        </Tag>
      </TagWrapper>
    ))
  )
  .add(
    'with action',
    withInfo(
      `
        The example below shows how the Tag component can be used with left side action icons.
        Actions include add, success and remove.
      `
    )(() => (
      <TagWrapper light aria-label="Tags">
        <Tag action={'add'} {...actionTagProps}>
          Offering Managment
        </Tag>
        <Tag action={'success'} {...actionTagProps}>
          Development
        </Tag>
        <Tag action={'remove'} {...actionTagProps}>
          Design
        </Tag>
      </TagWrapper>
    ))
  )
  .add(
    'with action function',
    withInfo(
      `
        The example below shows how the Tag component can be used with left side action icons.
        Actions include add, success and remove.
      `
    )(() => <TagUpdate />)
  )
  .add(
    'light',
    withInfo(
      `
        The example below shows how the Tag component can be used on a dark background.
      `
    )(() => (
      <TagWrapper aria-label="Tags">
        <Tag style={'light'} className="some-class">
          Offering Managment &middot; 72
        </Tag>
        <Tag style={'light'} remove className="some-class">
          Development
        </Tag>
        <Tag
          style={'light'}
          action={'remove'}
          actionDescription={'Remove this tag'}
          className="some-class">
          Design
        </Tag>
      </TagWrapper>
    ))
  );
