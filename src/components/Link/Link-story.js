import React from 'react';
import { storiesOf } from '@storybook/react';
import { Link } from 'carbon-components-react';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const linkProps = {
  onClick: () => {
    console.log('Clicked!'); // eslint-disable-line no-console
  },
};

const link = 'bx--link';

storiesOf('Components|Link', module)
  .addDecorator(withReadme(readme))
  .add(
    'Link',
    withInfo(``)(() => (
      <Link href="#" className={link} {...linkProps}>
        Link
      </Link>
    )),
  )
  .add(
    'Body Link',
    withInfo(``)(() => (
      <p>
        This is a paragraph with a <a href="#example">link</a>.
      </p>
    )),
  );
