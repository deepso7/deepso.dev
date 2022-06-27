import { Title, Text, Anchor, Container, Grid, Center } from '@mantine/core';
import Image from 'next/image';

const Welcome = () => (
  <>
    <Container>
      <Center>
        <Grid align="center">
          <Grid.Col span={4}>
            <Image src="/pfp.png" height={100} width={100} />
          </Grid.Col>
          <Grid.Col span={8}>
            <Title className="font-bold text-3xl md:text-5xl tracking-tight mb-1">
              Deepanshu Singh
            </Title>
            <Text color="dimmed">
              Full Stack Developer, working at{' '}
              <Anchor href="https://huddle01.com" size="lg" target="_blank">
                Huddle01
              </Anchor>
            </Text>
          </Grid.Col>
        </Grid>
      </Center>
    </Container>
  </>
);

export default Welcome;
