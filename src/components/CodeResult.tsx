/** @jsx jsx */
import { ReactNode } from 'react';

import { css, jsx } from '@emotion/react';

import { N20, N200 } from '@atlaskit/theme/colors';
import { borderRadius as getBorderRadius } from '@atlaskit/theme/constants';
import { token } from '@atlaskit/tokens';

import Tabs, { Tab, TabList, TabPanel } from '@atlaskit/tabs';

const borderRadius = getBorderRadius();



export const Panel = ({
  children,
  testId,
}: {
  children: ReactNode;
  testId?: string;
}) => (
  <div style={{
  display: 'flex',
  marginTop: token('space.200', '16px'),
  marginBottom: token('space.100', '8px'),
  padding: token('space.400', '32px'),
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  flexGrow: 1,
  backgroundColor: token('color.background.neutral', N20),
  borderRadius: `${borderRadius}px`,
  color: token('color.text.subtlest', N200),
  fontSize: '4em',
  fontWeight: 500,
}} data-testid={testId}>
    {children}
  </div>
);

export default function TabsDefaultExample() {
  return (
    <Tabs
      onChange={(index) => console.log('Selected Tab', index + 1)}
      id="default"
    >
      <TabList>
        <Tab>TestCase</Tab>
        <Tab>Result</Tab>
        <Tab>Submissions</Tab>
      </TabList>
      <TabPanel>
        <Panel>One</Panel>
      </TabPanel>
      <TabPanel>
        <Panel>Two</Panel>
      </TabPanel>
      <TabPanel>
        <Panel>Three</Panel>
      </TabPanel>
    </Tabs>
  );
}