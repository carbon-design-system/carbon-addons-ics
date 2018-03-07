import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Card, CardContent } from '../../index';
import { CardFooter } from 'carbon-components-react';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

const cardProps = {
  onClick: () => {
    console.log('click'); // eslint-disable-line no-console
  },
  onFocus: () => {
    console.log('focus'); // eslint-disable-line no-console
  },
  className: 'some-class',
};

storiesOf('Components|Card', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => <div className="bx--col-sm-6 bx--col-lg-4 bx--col-xl-3">{story()}</div>)
  .add(
    'default',
    withInfo(
      `
      This card is an example of how a card might appear but can be updated and modified to display any data that is needed within the context of your product. This example uses CardContent and CardFooter components.
    `,
    )(() => (
      <Card {...cardProps}>
        <CardContent
          cardTitle="Felton Jamer"
          cardInfo={['11:04 pm']}
          cardAvatar="/felton-jamer.png"
        />
        <CardFooter>
          <p className="bx--card-content">
            If you have feedback on the POC that we should discuss, please post as a response to
            this topic. If you have an issue that should be logged for development to fix, post it
            here:{' '}
            <a href="https://www.ibm.com">
              www.greenwell.com/feedback/greenwell/8fk843p22i90f6xh/5us6xbdmsg
            </a>
          </p>
        </CardFooter>
      </Card>
    )),
  )
  .add(
    'Media Card',
    withInfo(
      `
      Media Cards provide an at-a glance preview of media content. The example below uses the Card Footer component.
    `,
    )(() => (
      <Card {...cardProps}>
        <img
          className="bx--card__image"
          src="https://www.ibm.com/images/portal/U348822E90543V80/cognitive-bg-1600x900-1.jpg"
          alt="web"
        />
        <CardFooter>
          <div>
            <h3 className="bx--card__title">Card Name</h3>
            <h4 className="bx--card__info">Secondary Information</h4>
          </div>
        </CardFooter>
      </Card>
    )),
  )
  .add(
    'Empty Card',
    withInfo(
      `
      Here is an empty card. The example below uses the CardContent component.
    `,
    )(() => (
      <Card {...cardProps}>
        <CardContent cardTitle="Empty Card" />
      </Card>
    )),
  );
