import { Title, Text, Anchor } from '@mantine/core';
import useStyles from './Welcome.styles';

const Welcome = () => {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Deepanshu{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: '#f7ba2c', to: '#ea5459', deg: 45 }}
        >
          Singh
        </Text>
      </Title>
      <Text color="dimmed" align="center" size="lg" sx={{ maxWidth: 580 }} mx="auto" mt="xl">
        Full Stack Developer, working at{' '}
        <Anchor href="https://huddle01.com" size="lg">
          Huddle01
        </Anchor>
      </Text>
    </>
  );
};

export default Welcome;
