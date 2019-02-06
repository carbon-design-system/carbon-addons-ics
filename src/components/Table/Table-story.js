import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableData,
} from 'carbon-components-react';
import { withInfo } from '@storybook/addon-info';
const noWrap = 'bx--table-nowrap';
const numVal = 'bx--table-num-val';
import { withReadme } from 'storybook-readme';
import readme from './README.md';

storiesOf('Components|Table', module)
  .addDecorator(withReadme(readme))
  .addDecorator(story => <div className="bx--col-xs-12">{story()}</div>)
  .add(
    'default',
    withInfo(``)(() => (
      <Table>
        <TableHead>
          <TableRow header>
            <TableHeader>Name</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Total($)</TableHeader>
            <TableHeader>Paid</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableData className={noWrap}>Amadou Alain</TableData>
            <TableData className={noWrap}>15 Nov 2016</TableData>
            <TableData className={numVal}>146.52</TableData>
            <TableData>Yes</TableData>
          </TableRow>
          <TableRow>
            <TableData className={noWrap}>Elizabeth Schonfeld</TableData>
            <TableData className={noWrap}>04 Feb 2016</TableData>
            <TableData className={numVal}>2500</TableData>
            <TableData>No</TableData>
          </TableRow>
          <TableRow>
            <TableData className={noWrap}>Dan Misawa</TableData>
            <TableData className={noWrap}>09 July 2017</TableData>
            <TableData className={numVal}>28.60</TableData>
            <TableData>Yes</TableData>
          </TableRow>
          <TableRow>
            <TableData className={noWrap}>Dina Maroni</TableData>
            <TableData className={noWrap}>10 Mar 2016</TableData>
            <TableData className={numVal}>1740.00</TableData>
            <TableData>Yes</TableData>
          </TableRow>
        </TableBody>
      </Table>
    ))
  );
