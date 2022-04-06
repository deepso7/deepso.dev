import { Group, Header, Tabs } from '@mantine/core';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

const H = () => (
  <Header height={50} mt="md">
    <Group position="right">
      <Tabs position="right" variant="pills">
        <Tabs.Tab label="Home" />
        <Tabs.Tab label="Blogs" />
        <Tabs.Tab label="Github" />
      </Tabs>
      <ColorSchemeToggle />
    </Group>
  </Header>
);

export default H;
