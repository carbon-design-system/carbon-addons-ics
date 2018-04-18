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
      <LightWrapper>
        <TagWrapper aria-label="Tags">
          <Tag action={this.state.action} actionFunction={this.tagClick}>
            Offering Managment &middot; {this.state.count}
          </Tag>
        </TagWrapper>
      </LightWrapper>
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
};

const LightWrapper = props => (
  <div style={{ background: '#fff', padding: '1rem' }}>{props.children}</div>
);

storiesOf('Components|Tag', module)
  .addDecorator(withReadme(readme))
  .add(
    'default',
    withInfo(
      `
        This example below shows how the Tag
        component can be used. Notice dark is used in this case since it's on a
        light background. To use multiple tags use the TagWrapper component.
      `,
    )(() => (
      <LightWrapper>
        <TagWrapper aria-label="Tags">
          <Tag className="some-class">Offering Managment &middot; 72</Tag>
          <Tag className="some-class">Development &middot; 63</Tag>
          <Tag className="some-class">RTP &middot; 51</Tag>
          <Tag className="some-class">Littleton &middot; 33</Tag>
          <Tag className="some-class">Dublin &middot; 12</Tag>
        </TagWrapper>
      </LightWrapper>
    )),
  )
  .add(
    'remove',
    withInfo(
      `
        This shows how the Tag component can be used with a remove option.
      `,
    )(() => (
      <LightWrapper>
        <TagWrapper aria-label="Tags">
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
      </LightWrapper>
    )),
  )
  .add(
    'with Action',
    withInfo(
      `
        The example below shows how the Tag component can be used with left side action icons.
        Actions include add, success and remove.
      `,
    )(() => (
      <LightWrapper>
        <TagWrapper aria-label="Tags">
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
      </LightWrapper>
    )),
  )
  .add(
    'with Action function',
    withInfo(
      `
        The example below shows how the Tag component can be used with left side action icons.
        Actions include add, success and remove.
      `,
    )(() => <TagUpdate />),
  )
  .add(
    'Light',
    withInfo(
      `
        The example below shows how the Tag component can be used on a dark background.
      `,
    )(() => (
      <div className="bx--dark--tag--wrapper">
        <TagWrapper aria-label="Tags">
          <Tag style={'light'} className="some-class">
            Offering Managment &middot; 72
          </Tag>
          <Tag style={'light'} remove className="some-class">
            Development
          </Tag>
          <Tag style={'light'} leftAction action={'remove'} className="some-class">
            Design
          </Tag>
        </TagWrapper>
      </div>
    )),
  );
