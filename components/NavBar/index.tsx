import { Group, Header, Tabs } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { GitHubLogoIcon } from '@modulz/radix-icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { ColorSchemeToggle } from '../ColorSchemeToggle/ColorSchemeToggle';

enum TabKey {
  Home = '/',
  Blog = '/blog',
  Github = 'github',
}

const routes: Record<string, number> = {
  [TabKey.Home]: 0,
  [TabKey.Blog]: 1,
};

const NavBar = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(routes[router.pathname] || 0);

  const onChange = (active: number, tabKey: TabKey) => {
    if (tabKey === TabKey.Github) {
      showNotification({
        title: 'Opening Github',
        message: 'Hey there, Thanks for visiting',
      });
      setTimeout(() => {
        window.open('https://github.com/deepso7', '_blank');
      }, 2000);

      setActiveTab(routes[router.pathname] || 0);
      return;
    }

    setActiveTab(active);
    router.push(tabKey);
  };

  return (
    <Header height={50} mt="md" mb={80}>
      <Group position="right">
        <Tabs position="right" variant="pills" active={activeTab} onTabChange={onChange}>
          <Tabs.Tab label="Home" tabKey={TabKey.Home} />
          <Tabs.Tab label="Blog" tabKey={TabKey.Blog} />
          <Tabs.Tab icon={<GitHubLogoIcon width={20} height={20} />} tabKey={TabKey.Github} />
        </Tabs>
        <ColorSchemeToggle />
      </Group>
    </Header>
  );
};

export default NavBar;
