import { FC } from 'react';
import { Card, Text, Badge, Group, useMantineTheme } from '@mantine/core';
import cn from 'classnames';

interface Props {
  gradient: string;
}

const BlogPostCard: FC<Props> = ({ gradient }) => {
  const theme = useMantineTheme();

  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <div className={cn('rounded-xl mx-auto bg-gradient-to-r p-1', gradient)}>
      <Card shadow="sm" p="lg" radius="md">
        <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge variant="gradient" gradient={{ from: '#1dbde6', to: '#f1515e', deg: 45 }}>
            Backend
          </Badge>
        </Group>

        <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>
      </Card>
    </div>
  );
};

export default BlogPostCard;
